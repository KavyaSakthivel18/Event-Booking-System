import { Link, useNavigate } from "react-router-dom";

function Navbar(){

const navigate = useNavigate();

const logout = () => {

sessionStorage.clear();
navigate("/login");

}

const token = sessionStorage.getItem("token");

return(

<div className="navbar">

<h2>Event Booking</h2>

{token && (

<div className="nav-links">

<Link to="/dashboard">Events</Link>

<Link to="/my-bookings">My Bookings</Link>

<Link to="/admin">Admin</Link>

<button className="btn" onClick={logout}>
Logout
</button>

</div>

)}

</div>

)

}

export default Navbar;