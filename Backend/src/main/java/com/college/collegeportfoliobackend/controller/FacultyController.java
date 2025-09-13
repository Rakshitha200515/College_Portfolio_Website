package com.college.collegeportfoliobackend.controller;

import com.college.collegeportfoliobackend.entity.Faculty;
import com.college.collegeportfoliobackend.service.FacultyService;
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
public class FacultyController {

    @Autowired
    private FacultyService facultyService;

    @PostMapping("/faculty")
    public ResponseEntity<?> createFaculty(@RequestBody Faculty faculty) {
        return new ResponseEntity<>(facultyService.createFaculty(faculty), HttpStatus.CREATED);
    }

    @GetMapping("/getfaculty")
    public ResponseEntity<?> getAllFaculties() {
        return new ResponseEntity<>(facultyService.getAllFaculties(), HttpStatus.OK);
    }


    @GetMapping("/faculty/{facultyId}")
    public ResponseEntity<?> getSingleFaculty(@PathVariable String facultyId) {
        return new ResponseEntity<>(facultyService.getSingleFaculty(facultyId), HttpStatus.OK);
    }

    @PutMapping("/faculty/{facultyId}")
    public ResponseEntity<?> updateFaculty(@PathVariable String facultyId, @RequestBody Faculty faculty) {
        return new ResponseEntity<>(facultyService.updateFaculty(facultyId, faculty), HttpStatus.CREATED);
    }

    @DeleteMapping("/faculty/{facultyId}")
    public ResponseEntity<?> deleteFaculty(@PathVariable String facultyId) {
        facultyService.deleteFaculty(facultyId);
        return new ResponseEntity<>("Faculty removed successfully!!", HttpStatus.OK);
    }

}
