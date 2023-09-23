import React from 'react'
import { NavLink } from 'react-router-dom';


const Footer = () => {



  return (
    <div>
      <footer className="footer text-white">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-3">
                <h4>TAXIPIK</h4>
                <NavLink className="navbar-brand fw-border fs-4 mx-auto" to="/">
            <img width={100} height={100}  src={require ("../assets/taxipiklogo.png")} alt="About"/>
            </NavLink>
              </div>
             
                <div className="col-2">
                <h5>Company</h5>
                <ul className="nav flex-column ">
                  <li className="nav-item mb-2 ">
                    <NavLink to="/" className="nav-link p-0 text-white hover">Home</NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/about" className="nav-link p-0 text-white">About Us</NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/service" className="nav-link p-0 text-white">Services</NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/contact" className="nav-link p-0 text-white">Contect Us</NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-2">
                <h5>Book Now</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <NavLink to="/gokarna" className="nav-link p-0 text-white">Gokarna</NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/mysorepalace" className="nav-link p-0 text-white">Mysore Palace</NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/hempi" className="nav-link p-0 text-white">Hempi</NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/mangalore" className="nav-link p-0 text-white">Mangalore</NavLink>
                  </li>
                </ul>
              </div>


              <div className="col-4">
              <div className="col text-center">
             <p className='pt-1 text-white '>  <i className="fa fa-map-marker fa-1x mb-1">  Door no. 5-5-279/15, Ground Floor,<br/>Empire Mall, M.G.  Road,<br/>Mangalore - 575003 </i></p>
              </div>
              <div className="col text-center">
             <p className='pt-1 text-white '>  <i className="fa fa-phone fa-1x mb-1"> +91 8951571979</i></p>
              </div>
              <div className="col text-center">
             <p className='pt-1 text-white '>  <i className="fa fa-envelope fa-1x mb-1">  info@Taxipik.in</i></p>
              </div>
              </div>
            </div>

            <div className="d-flex justify-content-between pt-4 mt-4 border-top h">
              <p>@2023 Taxipik company , Inc. All rights reserved. </p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"> <a className="link-light" to="#">
                  <i className="fa fa-facebook  text-warning fa-2x " ></i> </a></li>
                <li className="ms-3"> <a className="link-light" to="#">
                  <i className="fa fa-instagram   text-warning fa-2x"></i> </a></li>
                <li className="ms-3"> <a className="link-light" to="#">
                  <i className="  fa fa-twitter text-warning fa-2x"></i> </a></li>
              </ul>
            </div>
          </footer>
        </div>

      </footer>
    </div>
  )
}

export default Footer;
