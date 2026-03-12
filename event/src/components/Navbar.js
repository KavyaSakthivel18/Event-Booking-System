import { Link } from "react-router-dom";

function Navbar(){

return(

<nav className="navbar">

<Link to="/">Events</Link>

<Link to="/mybookings">My Bookings</Link>

<Link to="/admin">Admin</Link>

<Link to="/login">Login</Link>

<Link to="/register">Register</Link>

</nav>

);

}

export default Navbar;