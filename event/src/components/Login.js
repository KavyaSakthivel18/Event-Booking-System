import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate = useNavigate();

const handleLogin=()=>{

API.post("/auth/login",{
email:email,
password:password
})
.then(res=>{
localStorage.setItem("token",res.data.token);
alert("Login Success");
navigate("/");
})
.catch(()=>alert("Login Failed"));

};

return(

<div className="card">

<h2>Login</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="btn" onClick={handleLogin}>
Login
</button>

</div>

);

}

export default Login;