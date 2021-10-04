package com.example.cloud.board.controller;

import com.example.cloud.board.service.BoardService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
}
