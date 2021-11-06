package com.example.cloud.dept.controller;

import com.example.cloud.common.CommonController;
import com.example.cloud.dept.domain.DeptInfo;
import com.example.cloud.dept.repository.DeptRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController @RequiredArgsConstructor @CrossOrigin("*") @RequestMapping("dept")
public class DeptController implements CommonController {
    private final DeptRepository deptRepository;

    @GetMapping("/find-depts-by-emp-count/{count}")
    public ResponseEntity<List<DeptInfo>> findDeptsByEmpCount(@PathVariable int count){
        return ResponseEntity.ok(deptRepository.findEmployeesByDeptNo(count).orElse(new ArrayList<>()));
    }
    @GetMapping("/find-max-dept")
    public ResponseEntity<List<DeptInfo>> findMaxDept(){
        return ResponseEntity.ok(deptRepository.findMaxDept());
    }

    @Override
    public ResponseEntity<List> findAll() {
        return null;
    }

    @Override
    public ResponseEntity getById(Object id) {
        return null;
    }

    @Override
    public ResponseEntity<String> save(Object entity) {
        return null;
    }

    @Override
    public ResponseEntity<Optional> findById(Object id) {
        return null;
    }

    @Override
    public ResponseEntity<Boolean> existsById(Object id) {
        return null;
    }

    @Override
    public ResponseEntity<Long> count() {
        return null;
    }

    @Override
    public ResponseEntity<String> deleteById(Object id) {
        return null;
    }
}
