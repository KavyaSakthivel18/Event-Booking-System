package com.booking.bookingsystem.repository;

import com.booking.bookingsystem.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {

    // Get bookings by user
    List<Booking> findByUserUserId(Integer userId);

    // Get bookings by event
    List<Booking> findByEventEventId(Integer eventId);
}