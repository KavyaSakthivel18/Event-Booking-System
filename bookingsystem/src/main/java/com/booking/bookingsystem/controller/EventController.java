package com.booking.bookingsystem.controller;
import com.booking.bookingsystem.entity.Event;
import com.booking.bookingsystem.service.EventService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/events")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    // Get all events
    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    // Get event by ID
    @GetMapping("/{id}")
    public Optional<Event> getEventById(@PathVariable Integer id) {
        return eventService.getEventById(id);
    }

    // Create event (Admin)
    @PostMapping("/admin")
    public Event createEvent(@RequestBody Event event) {
        return eventService.createEvent(event);
    }

    // Update event (Admin)
    @PutMapping("/admin/{id}")
    public Event updateEvent(@PathVariable Integer id, @RequestBody Event event) {
        return eventService.updateEvent(id, event);
    }

    // Delete event (Admin)
    @DeleteMapping("/admin/{id}")
    public void deleteEvent(@PathVariable Integer id) {
        eventService.deleteEvent(id);
    }

    // Get upcoming events
    @GetMapping("/upcoming")
    public List<Event> getUpcomingEvents() {
        return eventService.getUpcomingEvents();
    }
}