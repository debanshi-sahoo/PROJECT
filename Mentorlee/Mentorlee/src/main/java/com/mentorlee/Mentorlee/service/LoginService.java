package com.mentorlee.Mentorlee.service;

import com.mentorlee.Mentorlee.model.User;
import com.mentorlee.Mentorlee.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    /**
     * Authenticates a user by email and password.
     *
     * @param email    the user's email
     * @param password the user's password
     * @return true if authentication is successful, otherwise false
     */
    public boolean authenticate(String email, String password) {
        // Use Optional to safely handle the user retrieval
        Optional<User> optionalUser = userRepository.findByEmail(email);

        // Validate the password if the user is present
        return optionalUser
                .map(user -> user.getPassword().equals(password)) // Compare passwords
                .orElse(false); // Return false if user not found
    }
}
