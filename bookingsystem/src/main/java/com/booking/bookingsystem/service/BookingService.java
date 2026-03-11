package com.booking.bookingsystem.service;

import com.booking.bookingsystem.dto.BookingRequest;
import com.booking.bookingsystem.entity.Booking;
import com.booking.bookingsystem.entity.Event;
import com.booking.bookingsystem.entity.User;
import com.booking.bookingsystem.repository.BookingRepository;
import com.booking.bookingsystem.repository.EventRepository;
import com.booking.bookingsystem.repository.UserRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final EventRepository eventRepository;
    private final UserRepository userRepository;

    public BookingService(
            BookingRepository bookingRepository,
            EventRepository eventRepository,
            UserRepository userRepository) {
        this.bookingRepository = bookingRepository;
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
    }

    public Booking createBooking(BookingRequest request) {

        Event event = eventRepository.findById(request.getEventId())
                .orElseThrow(() -> new RuntimeException("Event not found"));

        if (event.getAvailableTickets() < request.getTickets()) {
            throw new RuntimeException("Not enough tickets available");
        }

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Booking booking = new Booking();
        booking.setEvent(event);
        booking.setUser(user);
        booking.setTicketsBooked(request.getTickets());

        event.setAvailableTickets(event.getAvailableTickets() - request.getTickets());
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
        event.setAvailableTickets(event.getAvailableTickets() + booking.getTicketsBooked());

        eventRepository.save(event);
        bookingRepository.save(booking);
    }

    // Get bookings of a specific user
        public List<Booking> getBookingsByUser(Integer userId) {
            return bookingRepository.findByUserUserId(userId);
        }

        // Get bookings for an event (Admin)
        public List<Booking> getBookingsByEvent(Integer eventId) {
            return bookingRepository.findByEventEventId(eventId);
        }
}