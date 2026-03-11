import React, { useEffect, useState } from "react";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch events from backend
    axios.get("http://localhost:8080/events")
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  return (
    <div className="event-list">
      <h2>Available Events</h2>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.eventId} className="event-item">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Tickets:</strong> {event.availableTickets} / {event.totalTickets}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
  