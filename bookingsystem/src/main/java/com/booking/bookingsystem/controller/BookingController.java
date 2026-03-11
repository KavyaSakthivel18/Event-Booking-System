package com.booking.bookingsystem.controller;

import com.booking.bookingsystem.dto.BookingRequest;
import com.booking.bookingsystem.entity.Booking;
import com.booking.bookingsystem.service.BookingService;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    // POST /bookings
    @PostMapping
    public Booking createBooking(@RequestBody BookingRequest request) {
        return bookingService.createBooking(request);
    }

    // GET /bookings/{id}
    @GetMapping("/{id}")
    public Optional<Booking> getBooking(@PathVariable Integer id) {
        return bookingService.getBooking(id);
    }

    // DELETE /bookings/{id}
    @DeleteMapping("/{id}")
    public void cancelBooking(@PathVariable Integer id) {
        bookingService.cancelBooking(id);
    }
}