import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarSec = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='sticky '>
      <nav className="navbar sticky navbar-expand-lg  shadow">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
            // Use isMobileMenuOpen state to add 'collapsed' class when menu is closed
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
               <NavLink className="navbar-brand fw-border fs-4 mx-auto text-white" to="/">
            <img width={100} height={100}  src={require ("../assets/taxipiklogo.png")} alt="About"/>
            </NavLink>
            <ul className="navbar-nav  me-auto mb-5 ml-10 mb-lg-2" >
              <li className="nav-item ">
                <NavLink className="nav-link active text-white " aria-current="page" to="/" style={{ fontSize: '18px' }}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item " >
                <NavLink className="nav-link text-white" to="/about" style={{ fontSize: '18px' }}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/service" style={{ fontSize: '18px' }}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/contact" style={{ fontSize: '18px' }}> 
                  Contact
                </NavLink>
              </li>
            </ul>
           
            <NavLink to="/login" className="btn btn-warning ms-auto px-4 rounded-pill">
              <i className="fa fa-sign-in me-2"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-warning ms-2 px-3 rounded-pill">
              <i className="fa fa-user-plus me-2"></i> Register
            </NavLink>
          
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarSec;
