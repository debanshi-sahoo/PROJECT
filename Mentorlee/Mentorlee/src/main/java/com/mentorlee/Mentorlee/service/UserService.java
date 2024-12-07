package com.mentorlee.Mentorlee.service;

import com.mentorlee.Mentorlee.model.User;
import com.mentorlee.Mentorlee.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    /**
     * Registers a new user.
     * 
     * @param user The user details to register
     * @return The saved user
     * @throws IllegalArgumentException if the email is already in use
     */
    public User registerUser(User user) {
        // Check if the email is already in use
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new IllegalArgumentException("Email is already in use.");
        }

        // Encrypt the password before saving it
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Save the user to the repository
        return userRepository.save(user);
    }

    /**
     * Authenticates a user based on email and password.
     * 
     * @param email The user's email
     * @param password The user's password
     * @return true if authentication is successful, false otherwise
     */
    public boolean authenticateUser(String email, String password) {
        // Find the user by email
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            // Compare the provided password with the hashed password in the database
            return passwordEncoder.matches(password, user.getPassword());
        }
        return false; // User not found
    }
}
