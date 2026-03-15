import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const login = async(e)=>{

e.preventDefault();

try{

const res = await API.post("/auth/login",{email,password});

sessionStorage.setItem("token",res.data.token);
sessionStorage.setItem("userId",res.data.userId);

navigate("/dashboard");

}catch(err){

alert("Invalid email or password");

}

}

return(

<div className="form-container">

<h2>Login</h2>

<form onSubmit={login}>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="btn">Login</button>

</form>

<p>
No account?
<Link to="/register"> Register</Link>
</p>

</div>

)

}

export default Login;