package com.example.cloud.user.service;

import com.example.cloud.user.entity.User;
import com.example.cloud.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service @RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public Optional<User> findById(long userId) {
        return userRepository.findById(userId);
    }
}
