package com.example.cloud.emp.domain;

import com.example.cloud.dept.domain.Dept;
import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Data
public class EmpDto {
    private long deptNo;
    private int empCountPerDept;
    private int salSum;

}
