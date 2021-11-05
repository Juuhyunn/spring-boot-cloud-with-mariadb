package com.example.cloud.dept.domain;

import com.example.cloud.emp.domain.Emp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Proxy;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name="DEPT")
@Component
@Proxy(lazy = false)
@NoArgsConstructor
@AllArgsConstructor
public class Dept {
    @Id @Column @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long deptNo;
    @Column private String dname;
    @Column private String loc;
    @OneToMany(mappedBy = "dept", fetch = FetchType.EAGER)
    private List<Emp> empList = new ArrayList<>();

}
