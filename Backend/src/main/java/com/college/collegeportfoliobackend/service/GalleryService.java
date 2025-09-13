package com.college.collegeportfoliobackend.service;

import com.college.collegeportfoliobackend.entity.Gallery;
import com.college.collegeportfoliobackend.repository.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class GalleryService {

    @Autowired
    private GalleryRepository galleryRepository;

    public Gallery createGallery(Gallery gallery) {
        return galleryRepository.save(gallery);
    }

    public List<Gallery> getAllGallery() {
        return galleryRepository.findAll();
    }


}
