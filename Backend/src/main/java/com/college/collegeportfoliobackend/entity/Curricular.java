package com.college.collegeportfoliobackend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GeneratedColumn;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Curricular {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;

    private String event;
    private String description;

    @Column(columnDefinition = "LONGTEXT")
    private String photo;


}
