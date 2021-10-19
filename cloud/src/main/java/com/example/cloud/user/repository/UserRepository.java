package com.example.cloud.user.repository;

import com.example.cloud.user.entity.User;
import com.example.cloud.user.entity.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    @Transactional
    @Query(value = "select * from users where users.username=:username and users.password=:password", nativeQuery = true)
//    @Query(value = "select username, password from users where users.username=:username and users.password=:password", nativeQuery = true)
    User login(@Param("username") String username, @Param("password") String password);
}
