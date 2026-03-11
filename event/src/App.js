// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import AdminDashboard from "./components/AdminDashBoard";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Simple Navigation */}
        <nav>
          <ul>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/admin">Admin Dashboard</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/events" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* Default route */}
          <Route path="/" element={<EventList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;