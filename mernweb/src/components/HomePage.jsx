import React from 'react'
import { NavLink } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
{/* home */}
<div className="container  mt-20"> </div>
      

      <section id="home">
      
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 mt-5">
                    <h1 className="display-4 fw-bolder mb-4 text-center text-white">Car Rental Services with Driver</h1>
                    <p className="lead text-center fs-4 mb-5 text-white">Expert Drivers with comfortable rides, providing the best in class cabs at your doorstep.</p>
                    <div className="buttons d-flex justify-content-center">
                    <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Contact Us</NavLink>
                        <NavLink to="/service" className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</NavLink>
                    </div>

                </div>
            </div>
        </div>
      </section>
      
    </div>
  )
}

export default HomePage;
