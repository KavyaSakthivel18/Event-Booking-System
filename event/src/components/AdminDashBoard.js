import { useEffect,useState } from "react";
import API from "../api/api";

function AdminDashboard(){

const [events,setEvents] = useState([]);

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [location,setLocation] = useState("");
const [date,setDate] = useState("");
const [tickets,setTickets] = useState("");

useEffect(()=>{

loadEvents();

},[]);

const loadEvents = ()=>{

API.get("/events")
.then(res=>setEvents(res.data));

}

const createEvent = async()=>{

await API.post("/events/admin",{

title,
description,
location,
date,
totalTickets:tickets,
availableTickets:tickets

});

loadEvents();

}

const deleteEvent = async(id)=>{

await API.delete(`/events/admin/${id}`);

loadEvents();

}

return(

<div className="container">

<h2>Admin Dashboard</h2>

<h3>Create Event</h3>

<input placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
<input placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
<input placeholder="Location" onChange={(e)=>setLocation(e.target.value)}/>
<input type="datetime-local" onChange={(e)=>setDate(e.target.value)}/>
<input type="number" placeholder="Tickets" onChange={(e)=>setTickets(e.target.value)}/>

<button className="btn" onClick={createEvent}>
Create Event
</button>

<hr/>

<div className="grid">

{events.map(e=>(
<div className="card" key={e.eventId}>

<h3>{e.title}</h3>

<p>{e.location}</p>

<button
className="btn"
onClick={()=>deleteEvent(e.eventId)}
>
Delete
</button>

</div>
))}

</div>

</div>

)

}

export default AdminDashboard;