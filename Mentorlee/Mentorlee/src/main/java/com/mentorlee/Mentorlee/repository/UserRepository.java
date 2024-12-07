package com.mentorlee.Mentorlee.repository;

import com.mentorlee.Mentorlee.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    /**
     * Finds a user by their email.
     * Used for login to validate credentials.
     * 
     * @param email the email of the user
     * @return Optional<User>
     */
    Optional<User> findByEmail(String email);

    /**
     * Checks if a user with the given email already exists.
     * Used during registration to prevent duplicate entries.
     * 
     * @param email the email to check
     * @return true if email exists, otherwise false
     */
    boolean existsByEmail(String email);
}
