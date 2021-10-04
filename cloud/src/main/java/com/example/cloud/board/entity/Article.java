package com.example.cloud.board.entity;

import com.example.cloud.item.entity.Item;
import com.example.cloud.user.entity.User;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Data
@Component
@Entity
@Table(name = "articles")
@AllArgsConstructor
@NoArgsConstructor
public class Article {
    @Id
    @Column(name = "article_id")
    @GeneratedValue
    private long boardId;
    @Column @NotNull String title;
    @Column @NotNull String content;
    @Column(name = "written_date") @NotNull String writtenDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;
}
