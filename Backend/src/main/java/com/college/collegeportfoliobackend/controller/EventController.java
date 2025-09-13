package com.college.collegeportfoliobackend.controller;

import com.college.collegeportfoliobackend.entity.Event;
import com.college.collegeportfoliobackend.entity.EventImage;
import com.college.collegeportfoliobackend.service.EventService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.ByteArrayInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping("/event")
    public ResponseEntity<?> createEvent(@RequestBody Event event){
        return new ResponseEntity<>(eventService.createEvent(event) , HttpStatus.CREATED);
    }

    @GetMapping("/getevent")
    public ResponseEntity<?> getAllEvents(){
        return new ResponseEntity<>(eventService.getAllEvents() , HttpStatus.OK);
    }

    @GetMapping("/event/{eventId}")
    public ResponseEntity<?> getSingleEvent(@PathVariable Integer eventId){
        return new ResponseEntity<>(eventService.getSingleEvent(eventId) , HttpStatus.OK);
    }

//    @PutMapping("/event/{eventId}")
//    public ResponseEntity<?> updateEvent(@PathVariable Integer eventId , @RequestBody Event event){
//        return new ResponseEntity<>(eventService.updateEvent(eventId , event) , HttpStatus.CREATED);
//    }

    @DeleteMapping("/event/{eventId}")
    public ResponseEntity<?> deleteEvent(@PathVariable Integer eventId){
        eventService.deleteEvent(eventId);
        return new ResponseEntity<>("Event removed successfully!!" , HttpStatus.OK);
    }

    @PostMapping("/event/{eventId}/upload")
    public ResponseEntity<?> uploadPhoto(@PathVariable Integer eventId , @RequestParam("image") MultipartFile[] image) throws IOException {
        eventService.uploadPhoto(eventId , image);
        return new ResponseEntity<>("Photo Uploaded successfully" , HttpStatus.OK);
    }

    @GetMapping("/event/{eventId}/downloadLinks")
    public ResponseEntity<?> getAllImagesByEventId(@PathVariable Integer eventId) throws FileNotFoundException {
        var imageUrl = eventService.downloadImagesByEventId(eventId).stream().map(image -> {
            return ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/api/v1/download/image/")
                    .path(String.valueOf(image.getId()))
                    .toUriString();
        }).toList();
        return new ResponseEntity<>(imageUrl, HttpStatus.OK);
    }

    @GetMapping("/download/image/{imageId}")
    public ResponseEntity<?> downloadImage(@PathVariable Integer imageId, HttpServletResponse response) throws IOException {
        byte[] image = eventService.downloadImage(imageId);
        ByteArrayInputStream inputStream = new ByteArrayInputStream(image);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(inputStream, response.getOutputStream());
        return new ResponseEntity<>("Success", HttpStatus.OK);
    }
}
