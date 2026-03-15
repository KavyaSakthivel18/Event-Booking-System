import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import MyBookings from "./components/MyBookings";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Navigate to="/login"/>}/>

<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

<Route path="/dashboard"
element={
<ProtectedRoute>
<EventList/>
</ProtectedRoute>
}
/>

<Route path="/events/:id"
element={
<ProtectedRoute>
<EventDetails/>
</ProtectedRoute>
}
/>

<Route path="/my-bookings"
element={
<ProtectedRoute>
<MyBookings/>
</ProtectedRoute>
}
/>

<Route path="/admin"
element={
<ProtectedRoute>
<AdminDashboard/>
</ProtectedRoute>
}
/>

</Routes>

</BrowserRouter>

)

}

export default App;