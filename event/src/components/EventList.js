import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";

function EventList(){

const [events,setEvents] = useState([]);
const [search,setSearch] = useState("");

useEffect(()=>{

API.get("/events/upcoming")
.then(res=>setEvents(res.data))
.catch(()=>alert("Failed to load events"));

},[]);

const filtered = events.filter(e =>
e.title.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="container">

<h1>Upcoming Events</h1>

<input
placeholder="Search events"
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="grid">

{filtered.map(event=>(

<div className="card" key={event.eventId}>

<h3>{event.title}</h3>

<p>{event.description}</p>

<p>Location: {event.location}</p>

<p>Date: {new Date(event.date).toLocaleDateString()}</p>

<p>Available: {event.availableTickets}</p>

<Link to={`/events/${event.eventId}`} className="btn">
View Details
</Link>

</div>

))}

</div>

</div>

)

}

export default EventList;