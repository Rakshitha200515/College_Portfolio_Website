package com.college.collegeportfoliobackend.controller;

import com.college.collegeportfoliobackend.entity.Achievement;
import com.college.collegeportfoliobackend.entity.Faculty;
import com.college.collegeportfoliobackend.service.AchievementService;
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
public class AchievementController {

    @Autowired
    private AchievementService achievementService;

    @PostMapping("/achievement")
    public ResponseEntity<?> createAchievement(@RequestBody Achievement achievement){
        return new ResponseEntity<>(achievementService.createAchievement(achievement) , HttpStatus.CREATED);
    }

    @GetMapping("/getachievement")
    public ResponseEntity<?> getAllAchievements(){
        return new ResponseEntity<>(achievementService.getAllAchievements() , HttpStatus.OK);
    }

    @GetMapping("/achievement/{achievementId}")
    public ResponseEntity<?> getSingleAchievement(@PathVariable Integer achievementId){
        return new ResponseEntity<>(achievementService.getSingleAchievement(achievementId) , HttpStatus.OK);
    }

    @PutMapping("/achievement/{achievementId}")
    public ResponseEntity<?> updateAchievement(@PathVariable Integer achievementId , @RequestBody Achievement achievement){
        return new ResponseEntity<>(achievementService.updateAchievement(achievementId , achievement) , HttpStatus.CREATED);
    }

    @DeleteMapping("/achievement/{achievementId}")
    public ResponseEntity<?> deleteAchievement(@PathVariable Integer achievementId){
        achievementService.deleteAchievement(achievementId);
        return new ResponseEntity<>("Achievement removed successfully!!" , HttpStatus.OK);
    }

}
