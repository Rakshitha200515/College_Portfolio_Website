package com.college.collegeportfoliobackend.controller;


import com.college.collegeportfoliobackend.entity.Curricular;
import com.college.collegeportfoliobackend.entity.Faculty;
import com.college.collegeportfoliobackend.repository.CurricularRepo;
import com.college.collegeportfoliobackend.service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")


public class CurricularController {
    @Autowired
    private CurricularRepo curricularRepo;

    @PostMapping("/curricular")
    public ResponseEntity<?> createCurricular(@RequestBody Curricular obj) {
        return new ResponseEntity<>(curricularRepo.save(obj), HttpStatus.CREATED);
    }

    @GetMapping("/getcurricular")
    public ResponseEntity<?> getCurricular() {
        return new ResponseEntity<>(curricularRepo.findAll(), HttpStatus.OK);
    }
}
