package com.booking.bookingsystem.repository;
import com.booking.bookingsystem.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;
@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {

    // Find upcoming events (date after now)
    List<Event> findByDateAfter(LocalDateTime now);

    // Search events by title (case-insensitive)
    List<Event> findByTitleContainingIgnoreCase(String keyword);
}

