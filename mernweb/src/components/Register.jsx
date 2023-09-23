
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import NavbarSec from './navbarSec'
import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react';



const Register = () => {

    const history =useNavigate()

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
      });
    
      // Handle inputs when they change
      const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
    
        // Update the state 'user' with the new value for the corresponding property
        setUser({ ...user, [name]: value });
      };

    //handle submit
   const handleSubmit = async(event) =>{
    event.preventDefault();
    //object Destructing 
    //store object data into variables
    const {username, email,password}=user;
    try {
        //it is submitted on port 3000 by default
        //which is front end but we need to 
        //submit it on backend which is on 
        //port 4000 so we need proxy
        const res= await fetch('/register',{
        method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body :JSON.stringify({
            username,email,password
         })
        })

        if(res.status === 400 || !res){
         window.alert("already user details")
        }else{

            //you need  to restart the server for proxy works
            window.alert("registered successfull");
            history('/login');
        }
    } catch (error) {
        console.log(error);
    }

   }
    
  return (
    <div>
        <NavbarSec/>
              <div className="container shadow my-5">
                    <div className="row justify-content-end">
                        <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
                            <h1 className="display-4 fw-bolder">Hello Friend</h1>
                            <p className="lead text-center">Enter Your Details to Register</p>
                            <h5 className='mb-5'>OR</h5>
                            <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
                        </div>
                        <div className="col-md-6 p-5">

                            <form onSubmit={handleSubmit} method="POST">
                                <div class="mb-3">
                                    <label for="name" class="form-label">User Name</label>
                                    <input type="text" class="form-control" id="name" 
                                    name='username' value={user.username} onChange={handleInput} required/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name='email' value={user.email} onChange={handleInput} required />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                    name='password' value={user.password} onChange={handleInput}  />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
                                    <label class="form-check-label" for="exampleCheck1">I Agree Terms and Conditions</label>
                                </div>
                                <button type="submit" name='submit' class="btn btn-outline-primary w-100 mt-4 rounded-pill">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
    </div>
  )
}

export default Register
