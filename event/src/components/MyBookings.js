import { useEffect, useState } from "react";
import API from "../api/api";

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    API.get("/bookings/event/1")
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));

  }, []);

  const cancelBooking = (id) => {

    API.delete(`/bookings/${id}`)
      .then(() => {
        alert("Booking Cancelled");
        window.location.reload();
      });

  };

  return (

    <div>

      <h1>My Bookings</h1>

      {bookings.length === 0 && (
        <p>No bookings yet</p>
      )}

      <div className="grid">

        {bookings.map(b => (

          <div className="card" key={b.bookingId}>

            <p>Event Title: {b.event.title}</p>

            <p>Event ID: {b.event.eventId}</p>

            <p>Tickets: {b.ticketsBooked}</p>

            <p>Status: {b.status}</p>

            <button
              className="btn"
              onClick={() => cancelBooking(b.bookingId)}
            >
              Cancel
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default MyBookings;