package com.booking.bookingsystem.controller;

import com.booking.bookingsystem.dto.BookingRequest;
import com.booking.bookingsystem.entity.Booking;
import com.booking.bookingsystem.service.BookingService;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    // Create booking
    @PostMapping
    public Booking createBooking(@RequestBody BookingRequest request) {
        return bookingService.createBooking(request);
    }

    // Get booking by id
    @GetMapping("/{id}")
    public Optional<Booking> getBooking(@PathVariable Integer id) {
        return bookingService.getBooking(id);
    }

    // Cancel booking
    @DeleteMapping("/{id}")
    public void cancelBooking(@PathVariable Integer id) {
        bookingService.cancelBooking(id);
    }

    // Get bookings for an event
    @GetMapping("/event/{eventId}")
    public List<Booking> getBookingsByEvent(@PathVariable Integer eventId) {
        return bookingService.getBookingsByEvent(eventId);
    }

    @GetMapping
public List<Booking> getAllBookings() {
    return bookingService.getAllBookings();
}
}