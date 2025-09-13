package com.college.collegeportfoliobackend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Achievement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String studentName;

    private String achievement;

    private String category; //study or extracurricular

    private String year;

    private String department;

    @Column(columnDefinition = "LONGTEXT")
    private String photo;

}
