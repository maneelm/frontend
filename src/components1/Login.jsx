import React,{ useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login(){
    
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/login',{email,password})
        .then(result=>{
            console.log(result)
            if(result.data==="Success"){
                navigate('/home')
            }
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25 shadow">
                <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"><strong>Email address</strong></label>
                <input 
                type="email"
                class="form-control" 
                id="exampleInputEmail1" 
                name="email" 
                aria-describedby="emailHelp"
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"><strong>Password</strong></label>
                <input 
                type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                name="password" 
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            </div>
            </form>
            <Link to="/">Don't have an account?Sign Up</Link>
        </div>
    </div>
    )
}
export default Login;