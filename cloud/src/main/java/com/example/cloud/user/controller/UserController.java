package com.example.cloud.user.controller;

import com.example.cloud.common.CommonController;
import com.example.cloud.user.entity.User;
import com.example.cloud.user.entity.UserDto;
import com.example.cloud.user.repository.UserRepository;
import com.example.cloud.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController implements CommonController<User, Long> {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final UserService userService;
    private final UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user){
        Optional<User> returnUser = userService.login(user.getUsername(), user.getPassword());
        System.out.println("로그인 :: 리액트에서 넘어온 정보 : " + user.toString());
        System.out.println("로그인 :: 디비 갔다온애 : " + returnUser.get().toString());
        return ResponseEntity.ok(returnUser.get());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable long id){
        System.out.println("=======================");
        System.out.println("디테일 :: 리액트에서 넘어온 정보 : " + id);
        User user = userService.findById(id).get();
        System.out.println("디테일 :: 디비 갔다온애 : " + user.toString());
        return ResponseEntity.ok(user);
    }


    @Override
    public ResponseEntity<List<User>> findAll() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @Override
    public ResponseEntity<User> getById(Long id) {
        return ResponseEntity.ok(userRepository.getById(id));
    }

    @PostMapping()
    @Override
    public ResponseEntity<String> save(@RequestBody User user) {
        System.out.println("리액트에서 넘어온 정보 : " + user.toString());
        logger.info(String.format("User Join Info is %s", user.toString()));
        userRepository.save(user);
        return ResponseEntity.ok("Success!");
    }

    @Override
    public ResponseEntity<Optional<User>> findById(Long id) {
        return ResponseEntity.ok(userRepository.findById(id));
    }

    @Override
    public ResponseEntity<Boolean> existsById(Long id) {
        return ResponseEntity.ok(userRepository.existsById(id));
    }

    @Override
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(userRepository.count());
    }

    @Override
    public ResponseEntity<String> deleteById(Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok("Success!");
    }
}
