import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function Register(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate();

const handleRegister=()=>{

API.post("/auth/register",{
name:name,
email:email,
password:password
})
.then(()=>{
alert("Registration Successful");
navigate("/login");
})
.catch(()=>alert("Registration Failed"));

};

return(

<div className="card">

<h2>Register</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="btn" onClick={handleRegister}>
Register
</button>

</div>

);

}

export default Register;