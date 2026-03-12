import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Event Booking</h2>

      <div className="nav-links">
        <Link to="/">Events</Link>
        <Link to="/my-bookings">My Bookings</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;