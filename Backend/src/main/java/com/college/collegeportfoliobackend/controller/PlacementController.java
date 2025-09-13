package com.college.collegeportfoliobackend.controller;

import com.college.collegeportfoliobackend.entity.Faculty;
import com.college.collegeportfoliobackend.entity.Placement;
import com.college.collegeportfoliobackend.service.PlacementService;
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
public class PlacementController {

    @Autowired
    private PlacementService placementService;

    @PostMapping("/placement")
    public ResponseEntity<?> createPlacement(@RequestBody Placement placement) {
        return new ResponseEntity<>(placementService.createPlacement(placement), HttpStatus.CREATED);
    }

    @GetMapping("/getplacement")
    public ResponseEntity<?> getAllPlacements() {
        return new ResponseEntity<>(placementService.getAllPlacements(), HttpStatus.OK);
    }

    @GetMapping("/placement/{placementId}")
    public ResponseEntity<?> getSinglePlacement(@PathVariable Integer placementId) {
        return new ResponseEntity<>(placementService.getSinglePlacement(placementId), HttpStatus.OK);
    }

    @PutMapping("/placement/{placementId}")
    public ResponseEntity<?> updatePlacement(@PathVariable Integer placementId, @RequestBody Placement placement) {
        return new ResponseEntity<>(placementService.updatePlacement(placement, placementId), HttpStatus.CREATED);
    }

    @DeleteMapping("/placement/{placementId}")
    public ResponseEntity<?> deletePlacement(@PathVariable Integer placementId) {
        placementService.deletePlacement(placementId);
        return new ResponseEntity<>("Placement removed successfully!!", HttpStatus.OK);
    }


}
