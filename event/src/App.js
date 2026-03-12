import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import BookingForm from "./components/BookingForm";
import MyBookings from "./components/MyBookings";
import AdminDashBoard from "./components/AdminDashBoard";

import Login from "./components/Login";
import Register from "./components/Register";

import "./styles/style.css";

function App() {

  return (

    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<EventList />} />

        <Route path="/events/:id" element={<EventDetails />} />

        <Route path="/book/:id" element={<BookingForm />} />

        <Route path="/mybookings" element={<MyBookings />} />

        <Route path="/admin" element={<AdminDashBoard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>

    </Router>

  );
}

export default App;