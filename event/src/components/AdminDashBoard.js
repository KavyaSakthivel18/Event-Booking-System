import { useEffect, useState } from "react";
import API from "../api/api";

function AdminDashboard() {

  const [events, setEvents] = useState([]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    totalTickets: 0,
    availableTickets: 0
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    API.get("/events")
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  };

  const handleChange = (e) => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value
    });
  };

  const createEvent = (e) => {
    e.preventDefault();

    API.post("/events/admin", newEvent)
      .then(() => {
        alert("Event created");
        fetchEvents();
      })
      .catch(() => alert("Error creating event"));
  };

  const deleteEvent = (id) => {

    API.delete(`/events/admin/${id}`)
      .then(() => {
        alert("Event deleted");
        fetchEvents();
      })
      .catch(() => alert("Delete failed"));
  };

  return (

    <div>

      <h1>Admin Dashboard</h1>

      <div className="card">

        <h3>Create Event</h3>

        <form onSubmit={createEvent}>

          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
          />

          <input
            name="description"
            placeholder="Description"
            onChange={handleChange}
            required
          />

          <input
            name="location"
            placeholder="Location"
            onChange={handleChange}
            required
          />

          <input
            type="datetime-local"
            name="date"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="totalTickets"
            placeholder="Total Tickets"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="availableTickets"
            placeholder="Available Tickets"
            onChange={handleChange}
            required
          />

          <button className="btn">Create Event</button>

        </form>

      </div>

      <h2>All Events</h2>

      <div className="grid">

        {events.map(event => (

          <div className="card" key={event.eventId}>

            <h3>{event.title}</h3>

            <p>{event.location}</p>

            <p>
              Tickets: {event.availableTickets}/{event.totalTickets}
            </p>

            <button
              className="btn"
              onClick={() => deleteEvent(event.eventId)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminDashboard;