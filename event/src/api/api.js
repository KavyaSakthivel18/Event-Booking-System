import axios from "axios";

const API = axios.create({
  baseURL: "https://event-booking-system-g067.onrender.com"
});

export default API;