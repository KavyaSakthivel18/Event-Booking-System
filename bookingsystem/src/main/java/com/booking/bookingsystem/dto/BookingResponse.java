package com.booking.bookingsystem.dto;

import java.time.LocalDateTime;

public class BookingResponse {
    private Integer bookingId;
    private String eventTitle;
    private Integer ticketsBooked;
    private String status;
    private LocalDateTime bookingDate;
}
