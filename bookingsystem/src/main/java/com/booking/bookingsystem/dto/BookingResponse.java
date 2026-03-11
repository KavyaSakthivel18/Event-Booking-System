package com.booking.bookingsystem.dto;

import java.time.LocalDateTime;
public class BookingResponse {
    private Integer id;
    private Integer eventId;
    private Integer userId;
    private LocalDateTime bookingDate;

    public BookingResponse(Integer id, Integer eventId, Integer userId, LocalDateTime bookingDate) {
        this.id = id;
        this.eventId = eventId;
        this.userId = userId;
        this.bookingDate = bookingDate;
    }

    // Getters and Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Integer getEventId() { return eventId; }
    public void setEventId(Integer eventId) { this.eventId = eventId; }

    public Integer getUserId() { return userId; }
    public void setUserId(Integer userId) { this.userId = userId; }

    public LocalDateTime getBookingDate() { return bookingDate; }
    public void setBookingDate(LocalDateTime bookingDate) { this.bookingDate = bookingDate; }
}
