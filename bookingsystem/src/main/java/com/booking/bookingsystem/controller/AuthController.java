package com.booking.bookingsystem.controller;

import com.booking.bookingsystem.dto.LoginRequest;
import com.booking.bookingsystem.dto.RegisterRequest;
import com.booking.bookingsystem.entity.User;
import com.booking.bookingsystem.service.AuthService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // POST /auth/register
    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    // POST /auth/login
    @PostMapping("/login")
    public User login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}