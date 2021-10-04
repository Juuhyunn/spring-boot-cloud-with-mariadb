package com.example.cloud.board.service;

import com.example.cloud.board.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service @RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{
    private final BoardRepository boardRepository;
}
