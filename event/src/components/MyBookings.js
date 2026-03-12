import { useEffect, useState } from "react";
import API from "../api/api";

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    API.get("/bookings")
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));

  }, []);

  return (

    <div>

      <h1>My Bookings</h1>

      {bookings.length === 0 && (
        <p>No bookings yet</p>
      )}

      <div className="grid">

        {bookings.map(booking => (

          <div className="card" key={booking.bookingId}>

            <h3>{booking.event.title}</h3>

            <p>Tickets: {booking.ticketsBooked}</p>

            <p>Status: {booking.status}</p>

            <p>
              Booked At: {new Date(booking.bookingDate).toLocaleString()}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MyBookings;