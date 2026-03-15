import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";
import BookingForm from "./BookingForm";

function EventDetails(){

const {id} = useParams();

const [event,setEvent] = useState(null);

useEffect(()=>{

API.get(`/events/${id}`)
.then(res=>setEvent(res.data));

},[id]);

if(!event) return <p>Loading...</p>

return(

<div className="container">

<h2>{event.title}</h2>

<p>{event.description}</p>

<p>Location: {event.location}</p>

<p>Date: {new Date(event.date).toLocaleString()}</p>

<p>Total Tickets: {event.totalTickets}</p>

<p>Available: {event.availableTickets}</p>

<BookingForm
eventId={event.eventId}
availableTickets={event.availableTickets}
/>

</div>

)

}

export default EventDetails;