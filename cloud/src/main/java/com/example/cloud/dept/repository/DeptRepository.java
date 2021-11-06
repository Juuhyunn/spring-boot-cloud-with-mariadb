package com.example.cloud.dept.repository;

import com.example.cloud.dept.domain.Dept;
import com.example.cloud.dept.domain.DeptInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
public interface DeptRepository extends JpaRepository<Dept, Long> {
    @Query(value = "select dept_no deptNo, count(*) empCountPerDept, sum(sal) salSum " +
            "from emp group by dept_no having count (*)>:count", nativeQuery = true)
    Optional<List<DeptInfo>> findEmployeesByDeptNo(@Param("count") int empCountPerDept);
    @Query(value = "select dept_no deptNo, count(*) empCountPerDept from emp group by dept_no = (select count(*) from emp group by dept_no order by count(*) desc limit 1)", nativeQuery = true)
    List<DeptInfo> findDept();
}
