package com.mentorlee.Mentorlee.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow CORS for all requests
        registry.addMapping("/**") // All endpoints
                .allowedOrigins("http://localhost:3000") // Replace with your frontend URL
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allowed methods
                .allowedHeaders("*") // Allow any header
                .allowCredentials(true); // Allow credentials (cookies, authorization headers)
    }
}
