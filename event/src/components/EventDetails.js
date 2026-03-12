import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";

function EventDetails() {

  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    API.get(`/events/${id}`)
      .then(res => setEvent(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (

    <div className="card">

      <h2>{event.title}</h2>

      <p>{event.description}</p>

      <p>{event.location}</p>

      <p>
        Tickets Left: {event.availableTickets}
      </p>

      {event.availableTickets > 0 && (
        <Link className="btn" to={`/book/${event.eventId}`}>
          Book Ticket
        </Link>
      )}

    </div>
  );
}

export default EventDetails;