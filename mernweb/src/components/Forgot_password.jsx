import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Forgot_password = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [showOtp, setShowOtp] = useState(false); // New state to show OTP input

    // Handle inputs
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUser({ ...user, [name]: value });
    };



    // Handle OTP submission
    const handleOtpSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle OTP submission
        console.log('OTP Submitted');
    };

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                        <h1 className="display-4 fw-bolder">Welcome Back</h1>
                        <p className="lead text-center">Enter Your Credentials To Login</p>
                        <h5 className='mb-5'>OR</h5>
                        <NavLink to="/register" className="btn btn-outline-light rounded-pill pb-2 w-50">Register</NavLink>
                    </div>
                    <div className="col-md-6 p-4">
                        <h1 className="display-6 fw-bolder mb-5">Forgot Password</h1>
                        <form onSubmit={ handleOtpSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="forget_email" 
                                    aria-describedby="emailHelp"
                                    name='email' 
                                    value={user.email}  
                                    onChange={handleChange}
                                    required 
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            {showOtp && (
                                <div className="mb-3">
                                    <label htmlFor="otpInput" className="form-label">Enter OTP</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="otpInput" 
                                        name='otp' 
                                        required 
                                    />
                                </div>
                            )}
                            <div className="text-left">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary w-auto mt-5 rounded-pill"
                                    onClick={() => setShowOtp(true)} // Show OTP input on click
                                >
                                    {showOtp ? 'Confirm OTP' : 'Send OTP'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Forgot_password;
