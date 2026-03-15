import { useState } from "react";
import API from "../api/api";

function BookingForm({eventId,availableTickets}){

const [tickets,setTickets] = useState(1);

const book = async()=>{

if(tickets > availableTickets){

alert("Tickets exceed available limit");
return;

}

try{

await API.post("/bookings",{
eventId,
tickets
});

alert("Booking successful");

}catch{

alert("Booking failed");

}

}

return(

<div>

<h3>Book Tickets</h3>

<input
type="number"
min="1"
value={tickets}
onChange={(e)=>setTickets(parseInt(e.target.value))}
/>

<button className="btn" onClick={book}>
Book
</button>

</div>

)

}

export default BookingForm;