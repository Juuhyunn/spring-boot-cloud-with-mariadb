package com.example.cloud.user.service;

import com.example.cloud.user.entity.User;
import com.example.cloud.user.entity.UserDto;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public interface UserService {
    Optional<User> findById(long userId);
    User login(String username, String password);
}
