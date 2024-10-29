package com.example.graduationProject.config;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class AppConfigProperties {
    @Value("LEAFY@!#$%^&*")
    private String jwtSecret;
    @Value("86400000")
    private long jwtExpirationMs;
    @Value("Bearer ")
    private String headerPrefix;
}
