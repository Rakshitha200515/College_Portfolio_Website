package com.college.collegeportfoliobackend.controller;


import com.college.collegeportfoliobackend.entity.Faculty;
import com.college.collegeportfoliobackend.entity.Lab;
import com.college.collegeportfoliobackend.repository.LabRepo;
import com.college.collegeportfoliobackend.service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")

public class LabController {


    @Autowired
    private LabRepo labRepo;

    @PostMapping("/lab")
    public ResponseEntity<?> createLab(@RequestBody Lab obj) {
        return new ResponseEntity<>(labRepo.save(obj), HttpStatus.CREATED);
    }

    @GetMapping("/getlab")
    public ResponseEntity<?> getLab() {
        return new ResponseEntity<>(labRepo.findAll(), HttpStatus.OK);
    }

}
