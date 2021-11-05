package com.example.cloud.emp.controller;

import com.example.cloud.common.CommonController;
import com.example.cloud.emp.domain.Emp;
import com.example.cloud.emp.domain.EmpDto;
import com.example.cloud.emp.repository.EmpRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/emp")
public class EmpController {
    private final EmpRepository empRepository;

    @GetMapping("/find")
    public ResponseEntity<List<Emp>> findAll() {
        return null;
    }

    public ResponseEntity<Emp> getById(Long id) {
        return null;
    }

    public ResponseEntity<String> save(Emp entity) {
        return null;
    }

    public ResponseEntity<Optional<Emp>> findById(Long id) {
        return null;
    }

    public ResponseEntity<Boolean> existsById(Long id) {
        return null;
    }

    public ResponseEntity<Long> count() {
        return null;
    }

    public ResponseEntity<String> deleteById(Long id) {
        return null;
    }
}
