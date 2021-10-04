package com.example.cloud.item.controller;

import com.example.cloud.item.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ItemController {
    private final ItemService itemService;
}
