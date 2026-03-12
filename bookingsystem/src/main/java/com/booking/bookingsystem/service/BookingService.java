package com.booking.bookingsystem.service;

import com.booking.bookingsystem.dto.BookingRequest;
import com.booking.bookingsystem.entity.Booking;
import com.booking.bookingsystem.entity.Event;
import com.booking.bookingsystem.repository.BookingRepository;
import com.booking.bookingsystem.repository.EventRepository;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final EventRepository eventRepository;

    public BookingService(
            BookingRepository bookingRepository,
            EventRepository eventRepository) {

        this.bookingRepository = bookingRepository;
        this.eventRepository = eventRepository;
    }

    public Booking createBooking(BookingRequest request) {

        Event event = eventRepository.findById(request.getEventId())
                .orElseThrow(() -> new RuntimeException("Event not found"));

        if (event.getAvailableTickets() < request.getTickets()) {
            throw new RuntimeException("Not enough tickets available");
        }

        Booking booking = new Booking();

        booking.setEvent(event);
        booking.setTicketsBooked(request.getTickets());
        booking.setBookingDate(LocalDateTime.now());
        booking.setStatus("CONFIRMED");

        event.setAvailableTickets(
                event.getAvailableTickets() - request.getTickets()
        );

        eventRepository.save(event);

        return bookingRepository.save(booking);
    }

    public Optional<Booking> getBooking(Integer id) {
        return bookingRepository.findById(id);
    }

    public void cancelBooking(Integer id) {

        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        booking.setStatus("CANCELLED");

        Event event = booking.getEvent();

        event.setAvailableTickets(
                event.getAvailableTickets() + booking.getTicketsBooked()
        );

        eventRepository.save(event);
        bookingRepository.save(booking);
    }

    public List<Booking> getBookingsByEvent(Integer eventId) {
        return bookingRepository.findByEventEventId(eventId);
    }

    public List<Booking> getAllBookings() {
    return bookingRepository.findAll();
}
}