package com.example.cloud.user.entity;

import com.example.cloud.board.entity.Article;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "users")
@Component
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @Column(name = "user_id")
    @GeneratedValue
    private long userId;
    @Column @NotNull private String username;
    @Column @NotNull private String password;
    @Column @NotNull private String name;
    @Column @NotNull private String email;
    @Column(name = "reg_date") @NotNull private String regDate;
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Article> articleList = new ArrayList<>();

}
