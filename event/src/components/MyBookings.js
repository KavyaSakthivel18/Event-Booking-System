import { useEffect,useState } from "react";
import API from "../api/api";

function MyBookings(){

const [bookings,setBookings] = useState([]);

useEffect(()=>{

API.get("/bookings")
.then(res=>setBookings(res.data));

},[]);

const cancel = async(id)=>{

await API.delete(`/bookings/${id}`);

setBookings(bookings.filter(b => b.bookingId !== id));

}

return(

<div className="container">

<h2>My Bookings</h2>

<div className="grid">

{bookings.map(b=>(
<div className="card" key={b.bookingId}>

<h3>{b.event.title}</h3>

<p>Tickets: {b.ticketsBooked}</p>

<p>Status: {b.status}</p>

<p>Date: {new Date(b.bookingDate).toLocaleString()}</p>

<button
className="btn"
onClick={()=>cancel(b.bookingId)}
>
Cancel
</button>

</div>
))}

</div>

</div>

)

}

export default MyBookings;