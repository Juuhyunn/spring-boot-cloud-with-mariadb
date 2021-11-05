package com.example.cloud.dept.repository;

import com.example.cloud.dept.domain.Dept;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface DeptRepository extends JpaRepository<Dept, Long> {
//    @Transactional
}
