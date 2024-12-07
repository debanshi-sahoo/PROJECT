package com.mentorlee.Mentorlee.controller;

import com.mentorlee.Mentorlee.model.User;
import com.mentorlee.Mentorlee.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * Handles user registration.
     *
     * @param user the user details for registration
     * @return a success message or error response
     */
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User registeredUser = userService.registerUser(user); // Save user
            // Use the registeredUser value for meaningful feedback
            return ResponseEntity.ok("User registered successfully with ID: " + registeredUser.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("An error occurred while registering the user.");
        }
    }

    /**
     * Handles user login.
     *
     * @param loginRequest contains email and password for login
     * @return a success message or error response
     */
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
        boolean isAuthenticated = userService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(401).body("Invalid email or password.");
        }
    }

    /**
     * Fetches all available user roles.
     *
     * @return a list of available roles
     */
    @GetMapping("/roles")
    public ResponseEntity<?> getRoles() {
        return ResponseEntity.ok(User.Role.values());
    }
}
