package com.college.collegeportfoliobackend.controller;

import com.college.collegeportfoliobackend.entity.Alumini;
import com.college.collegeportfoliobackend.service.AluminiService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class AluminiController {

    @Autowired
    private AluminiService aluminiService;

    @PostMapping("/alumini")
    public ResponseEntity<?> createAlumini(@RequestBody Alumini alumini) {
        return new ResponseEntity<>(aluminiService.createAlumini(alumini), HttpStatus.CREATED);
    }

    @GetMapping("/getalumini")
    public ResponseEntity<?> getAllAluminis() {
        return new ResponseEntity<>(aluminiService.getAllAluminis(), HttpStatus.OK);
    }

    @GetMapping("/alumini/{aluminiId}")
    public ResponseEntity<?> getSingleAlumini(@PathVariable Integer aluminiId) {
        return new ResponseEntity<>(aluminiService.getSingleAlumini(aluminiId), HttpStatus.OK);
    }

//    @PutMapping("/alumini/{aluminiId}")
//    public ResponseEntity<?> updateAlumini(@PathVariable Integer aluminiId, @RequestBody Alumini alumini) {
//        return new ResponseEntity<>(aluminiService.updateAlumini(alumini, aluminiId), HttpStatus.CREATED);
//    }

    @DeleteMapping("/alumini/{aluminiId}")
    public ResponseEntity<?> deleteAlumini(@PathVariable Integer aluminiId) {
        aluminiService.deleteAlumini(aluminiId);
        return new ResponseEntity<>("Alumini removed successfully!!", HttpStatus.OK);
    }


}
