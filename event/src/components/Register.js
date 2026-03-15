import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const register = async(e)=>{

e.preventDefault();

try{

await API.post("/auth/register",{
name,
email,
password
});

alert("Registration successful");

navigate("/login");

}catch{

alert("Registration failed");

}

}

return(

<div className="form-container">

<h2>Register</h2>

<form onSubmit={register}>

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

<button className="btn">Register</button>

</form>

<p>
Already have account?
<Link to="/login"> Login</Link>
</p>

</div>

)

}

export default Register;