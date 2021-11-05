package com.example.cloud.emp.repository;

import com.example.cloud.emp.domain.Emp;
import com.example.cloud.emp.domain.EmpDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.naming.ldap.HasControls;
import java.util.Optional;

@Repository
public interface EmpRepository extends JpaRepository<Emp, Long> {
//    @Query(value = "select dept_no, count(*), sum(sal) from emp group by dept_no having count(*)>:count", nativeQuery = true)
//    Optional<HasControls<String, String>> findEmployeeByDeptNo(@Param("count") int empCountPerDept);

}
