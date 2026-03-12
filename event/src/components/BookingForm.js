import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../api/api";

function BookingForm() {

  const { id } = useParams();

  const [tickets, setTickets] = useState(1);

  const handleBooking = () => {

  API.post("/bookings", {
    eventId: id,
    tickets: tickets
  })
  .then(() => alert("Booking successful"))
  .catch(err => {
    console.error(err);
    alert("Booking failed");
  });

};
  return (

    <div className="card">

      <h2>Book Tickets</h2>

      <input
        type="number"
        value={tickets}
        min="1"
        onChange={(e) => setTickets(e.target.value)}
      />

      <button className="btn" onClick={handleBooking}>
        Book
      </button>

    </div>
  );
}

export default BookingForm;