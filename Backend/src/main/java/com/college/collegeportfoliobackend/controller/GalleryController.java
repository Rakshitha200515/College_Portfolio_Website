package com.college.collegeportfoliobackend.controller;

import com.college.collegeportfoliobackend.entity.Gallery;
import com.college.collegeportfoliobackend.service.GalleryService;
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
public class GalleryController {

    @Autowired
    private GalleryService galleryService;

    @PostMapping("/gallery")
    public ResponseEntity<?> createGallery(@RequestBody Gallery gallery) {
        return new ResponseEntity<>(galleryService.createGallery(gallery), HttpStatus.OK);
    }

    @GetMapping("/getgallery")
    public ResponseEntity<?> getAllGallery() {
        return new ResponseEntity<>(galleryService.getAllGallery(), HttpStatus.OK);
    }

}
