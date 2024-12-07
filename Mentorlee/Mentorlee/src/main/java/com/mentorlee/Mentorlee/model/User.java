package com.mentorlee.Mentorlee.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name; // User's full name

    @Column(nullable = false, unique = true)
    private String email; // User's email (used for login)

    @Column(nullable = false)
    private String password; // Encrypted password

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role; // Role: FACULTY, STUDENT, or ADMIN

    // Define user roles as an enum for controlled access
    public enum Role {
        FACULTY,
        STUDENT,
        ADMIN
    }

    // Optional: You can add convenience methods to handle the role or password
    public boolean isFaculty() {
        return this.role == Role.FACULTY;
    }

    public boolean isStudent() {
        return this.role == Role.STUDENT;
    }

    public boolean isAdmin() {
        return this.role == Role.ADMIN;
    }
}
