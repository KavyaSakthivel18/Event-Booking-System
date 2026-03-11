// import React from 'react';
  
//   const EventDetails = () =>  {
// 	return (
// 	  <div>
// 	  </div>
// 	);
//   }
  
//   export default EventDetails;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventDetails = () => {
  const { id } = useParams(); // get eventId from URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch event details from backend
    axios.get(`http://localhost:8080/events/${id}`)
      .then(response => {
        setEvent(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching event details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading event details...</p>;
  }

  if (!event) {
    return <p>Event not found.</p>;
  }

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Tickets Available:</strong> {event.availableTickets} / {event.totalTickets}</p>
    </div>
  );
};

export default EventDetails;
  