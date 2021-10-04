package com.example.cloud.board.repository;

import com.example.cloud.board.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<Article, Long> {
}
