import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";

function EventList() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events")
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>

      <h1>Upcoming Events</h1>

      <div className="grid">

        {events.map(event => (

          <div className="card" key={event.eventId}>

            <h3>{event.title}</h3>

            <p>{event.description}</p>

            <p>{event.location}</p>

            <p>
              Tickets: {event.availableTickets}/{event.totalTickets}
            </p>

            <Link to={`/events/${event.eventId}`} className="btn">
              View Details
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default EventList;