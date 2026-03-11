package com.booking.bookingsystem.controller;

import com.booking.bookingsystem.entity.Booking;
import com.booking.bookingsystem.service.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/bookings")
public class AdminBookingController {

    private final BookingService bookingService;

    public AdminBookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    // GET /admin/bookings/event/{eventId}
    @GetMapping("/event/{eventId}")
    public List<Booking> getBookingsForEvent(@PathVariable Integer eventId) {
        return bookingService.getBookingsByEvent(eventId);
    }
}