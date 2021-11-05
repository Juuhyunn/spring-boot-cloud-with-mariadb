package com.example.cloud.dept.controller;

import com.example.cloud.common.CommonController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class DeptController implements CommonController {

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
