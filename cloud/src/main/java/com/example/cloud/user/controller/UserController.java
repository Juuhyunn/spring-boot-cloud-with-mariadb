package com.example.cloud.user.controller;

import com.example.cloud.user.entity.User;
import com.example.cloud.user.entity.UserDto;
import com.example.cloud.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user){
        User returnUser = userService.login(user.getUsername(), user.getPassword());
        System.out.println("리액트에서 넘어온 정보 : " + user.toString());
        System.out.println("디비 갔다온애 : " + returnUser.toString());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<UserDto> findById(@PathVariable long id){
        System.out.println("=======================");
        User user = userService.findById(id).get();
        UserDto userDto = UserDto.builder()
                .userId(user.getUserId())
                .username(user.getUsername())
                .password(user.getPassword())
                .name(user.getName())
                .email(user.getEmail())
                .regDate(user.getRegDate())
                .build();
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
}
