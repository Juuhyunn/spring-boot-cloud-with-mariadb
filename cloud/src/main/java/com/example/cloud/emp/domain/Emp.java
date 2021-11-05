package com.example.cloud.emp.domain;

import com.example.cloud.dept.domain.Dept;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Proxy;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Data
@Entity
@Table(name="EMP")
@Component
//@Proxy(lazy = false)
//@NoArgsConstructor
//@AllArgsConstructor
public class Emp {
    @Id @Column @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long empNo;
    @Column private String ename;
    @Column private String job;
    @Column private int mgr;
    @Column private String hireDate;
    @Column private int sal;
    @Column private int comm;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="deptNo")
    private Dept dept;


}
