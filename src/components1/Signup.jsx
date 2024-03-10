import React,{ useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup(){
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/register',{name,email,password})
        .then(result=>{console.log(result)
          navigate('/login')
        })
        .catch(err=>console.log(err))
    }


    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25 shadow">
                <h2>Register</h2>
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="nameInput" class="form-label"><strong>Name</strong></label>
                <input 
                type="text" 
                class="form-control" 
                id="nameInput" 
                name="name" 
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
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
              Submit
            </button>
            </div>
            </form>
            <Link to="/login">Already have an account?Login</Link>
            </div>
        </div>
    )
}
 export default Signup