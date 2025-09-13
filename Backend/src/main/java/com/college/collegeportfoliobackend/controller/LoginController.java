package com.college.collegeportfoliobackend.controller;


import com.college.collegeportfoliobackend.entity.Admin;
import com.college.collegeportfoliobackend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class LoginController {

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/login")
    public ResponseEntity<?> adminLogin(@RequestBody Admin obj){
              var admin = adminRepository.findById((obj.getId()))
                      .orElseThrow(() -> new RuntimeException("Admin not found"));
              if(!admin.getPassword().equals(obj.getPassword())){
                  throw new RuntimeException("Invalid password");
              }
              return new ResponseEntity<>("Admin" , HttpStatus.OK);

    }
}
