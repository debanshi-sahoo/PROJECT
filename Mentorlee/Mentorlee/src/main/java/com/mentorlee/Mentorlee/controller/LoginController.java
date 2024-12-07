package com.mentorlee.Mentorlee.controller;

import com.mentorlee.Mentorlee.model.User;
import com.mentorlee.Mentorlee.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class LoginController {

    @Autowired
    private LoginService loginService;

    // Login API
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        boolean isAuthenticated = loginService.authenticate(user.getEmail(), user.getPassword());
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password.");
        }
    }
}
