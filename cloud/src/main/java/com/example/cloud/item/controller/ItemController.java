package com.example.cloud.item.controller;

import com.example.cloud.common.CommonController;
import com.example.cloud.item.entity.Item;
import com.example.cloud.item.repository.ItemRepository;
import com.example.cloud.item.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class ItemController implements CommonController<Item, Long> {
    private final ItemRepository itemRepository;
    private final ItemService itemService;

    @Override
    public ResponseEntity<List<Item>> findAll() {
        return ResponseEntity.ok(itemRepository.findAll());
    }

    @Override
    public ResponseEntity<Item> getById(Long id) {
        return ResponseEntity.ok(itemRepository.getById(id));
    }

    @Override
    public ResponseEntity<String> save(Item item) {
        itemRepository.save(item);
        return ResponseEntity.ok("Success!");
    }

    @Override
    public ResponseEntity<Optional<Item>> findById(Long id) {
        return ResponseEntity.ok(itemRepository.findById(id));
    }

    @Override
    public ResponseEntity<Boolean> existsById(Long id) {
        return ResponseEntity.ok(itemRepository.existsById(id));
    }

    @Override
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(itemRepository.count());
    }

    @Override
    public ResponseEntity<String> deleteById(Long id) {
        itemRepository.deleteById(id);
        return ResponseEntity.ok("Success!");
    }
}
