package com.booking.bookingsystem.service;
import com.booking.bookingsystem.entity.Event;
import com.booking.bookingsystem.repository.EventRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
@Service
public class EventService {
    private final EventRepository eventRepository;
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }
    public Event updateEvent(Integer id, Event updatedEvent) {
        Optional<Event> existing = eventRepository.findById(id);
        if (existing.isPresent()) {
            Event event = existing.get();
            event.setTitle(updatedEvent.getTitle());
            event.setDescription(updatedEvent.getDescription());
            event.setDate(updatedEvent.getDate());
            event.setLocation(updatedEvent.getLocation());
            event.setTotalTickets(updatedEvent.getTotalTickets());
            event.setAvailableTickets(updatedEvent.getAvailableTickets());
            return eventRepository.save(event);
        }
        return null;
    }

    public void deleteEvent(Integer id) {
        eventRepository.deleteById(id);
    }

    public Optional<Event> getEventById(Integer id) {
        return eventRepository.findById(id);
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public List<Event> getUpcomingEvents() {
        return eventRepository.findByDateAfter(LocalDateTime.now());
    }
}

