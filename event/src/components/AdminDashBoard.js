// import React from 'react';
  
//   const AdminDashBoard = () =>  {
// 	return (
// 	  <div>
// 	  </div>
// 	);
//   }
  
//   export default AdminDashBoard;

import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    totalTickets: 0,
    availableTickets: 0
  });

  // Fetch all events
  useEffect(() => {
    axios.get("http://localhost:8080/events")
      .then(response => setEvents(response.data))
      .catch(error => console.error("Error fetching events:", error));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  // Create new event
  const handleCreateEvent = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/events/admin", newEvent)
      .then(response => {
        setEvents([...events, response.data]);
        setNewEvent({
          title: "",
          description: "",
          date: "",
          location: "",
          totalTickets: 0,
          availableTickets: 0
        });
      })
      .catch(error => console.error("Error creating event:", error));
  };

  // Delete event
  const handleDeleteEvent = (id) => {
    axios.delete(`http://localhost:8080/events/admin/${id}`)
      .then(() => {
        setEvents(events.filter(event => event.eventId !== id));
      })
      .catch(error => console.error("Error deleting event:", error));
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {/* Event Creation Form */}
      <form onSubmit={handleCreateEvent} className="event-form">
        <h3>Create New Event</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newEvent.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newEvent.description}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newEvent.location}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="totalTickets"
          placeholder="Total Tickets"
          value={newEvent.totalTickets}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="availableTickets"
          placeholder="Available Tickets"
          value={newEvent.availableTickets}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Event</button>
      </form>

      {/* Event List */}
      <h3>All Events</h3>
      <ul>
        {events.map(event => (
          <li key={event.eventId} className="event-item">
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Tickets:</strong> {event.availableTickets} / {event.totalTickets}</p>
            <button onClick={() => handleDeleteEvent(event.eventId)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
  