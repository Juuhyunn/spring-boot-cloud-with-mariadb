package com.example.cloud.user.controller;

import com.example.cloud.user.entity.User;
import com.example.cloud.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @GetMapping("/{id}")
    public Optional<User> findById(@PathVariable long id){
        System.out.println(userService.findById(id));
        return userService.findById(id);
    }
}
