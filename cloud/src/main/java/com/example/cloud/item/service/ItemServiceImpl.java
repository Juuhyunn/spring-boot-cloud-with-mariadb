package com.example.cloud.item.service;

import com.example.cloud.item.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService{
    private final ItemRepository itemRepository;
}
