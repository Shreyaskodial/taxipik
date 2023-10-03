import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination';
import PaginationMsz from '../components/PaginationMsz';



const Dashboard = () => {

    const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
      
      // Fetch data from the API
      axios.get('/messages')
          .then(response => {
              setMessages(response.data);
          })
          .catch(error => {
              console.error(error);
          });
  }, []);
    
  const [savedBookings, setSavedBookings] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('/savedbookings')
      .then(response => {
        setSavedBookings(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div>
        
      
{/* <!-- Dashboard --> */}
<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
{/*     <!-- Vertical Navbar --> */}
    <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
        <div class="container-fluid">
          {/*   <!-- Toggler --> */}
            <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
           {/*  <!-- Brand --> */}
            <a class=" py-lg-2 mb-lg-5 px-lg-6 " href="#">
            <img width={100} height={120}  src={require ("../assets/taxipiklogo.png")} alt="About"/>
            </a>
        {/*     <!-- User menu (mobile) --> */}
            <div class="navbar-user d-lg-none">
            {/*     <!-- Dropdown --> */}
                <div class="dropdown">
                  {/*   <!-- Toggle --> */}
                    <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="avatar-parent-child">
                            <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar- rounded-circle"/>
                            <span class="avatar-child avatar-badge bg-success"></span>
                        </div>
                    </a>
             {/*        <!-- Menu --> */}
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                        <a href="#" class="dropdown-item">Profile</a>
                        <a href="#" class="dropdown-item">Settings</a>
                        <a href="#" class="dropdown-item">Billing</a>
                        <hr class="dropdown-divider"/>
                        <a href="#" class="dropdown-item">Logout</a>
                    </div>
                </div>
            </div>
     {/*        <!-- Collapse --> */}
            <div class="collapse navbar-collapse" id="sidebarCollapse">
    {/*             <!-- Navigation --> */}
                <ul class="navbar-nav">
                <NavLink to="/dashbord"
                            
                            className="nav-link"><i class="bi bi-house"></i>Dashbord
                           <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                           </NavLink>
                  
                           <li class="nav-item">
                           <NavLink to="/bookings"
                            
                            className="nav-link"><i class="bi bi-journal-arrow-down"></i> Bookings
                           <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                           </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to="/bookconfirmed"
                            
                             className="nav-link"><i class="bi bi-chat"></i> Confirmed Books
                            <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                            </NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to="/dashbordMsz"
                            
                             className="nav-link"><i class="bi bi-chat"></i> Messages
                            <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                            </NavLink>
                    </li>
                 
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-bookmarks"></i> Collections
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-people"></i> Users
                        </a>
                    </li>
                </ul>
 

        {/*         <!-- User (md) --> */}
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-person-square"></i> Account
                        </a>
                    </li>
                    <li class="nav-item">
                        {/* <NavLink to={"/"}>
                            <i class="bi bi-box-arrow-left"></i> Logout
                        </NavLink> */}

<NavLink to="/" className="nav-link"><i class="bi bi-box-arrow-left"></i> Logout
                           </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
   {/*  <!-- Main content --> */}
    <div class="h-screen flex-grow-1 overflow-y-lg-auto">
 {/*        <!-- Header --> */}
        <header class="bg-surface-primary border-bottom pt-6">
            <div class="container-fluid">
                <div class="mb-npx">
                    <div class="row align-items-center">
                        <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                           {/*  <!-- Title --> */}
                            <h1 class="h2 mb-0 ls-tight">Application</h1>
                        </div>
                    {/*     <!-- Actions --> */}
                        <div class="col-sm-6 col-12 text-sm-end">
                        <div class="container py-1 h-100"> {/* Reduce container padding */}
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col col-md-9 col-lg-7 col-xl-6">
      <div class="card" style={{ borderRadius: "6px" }}> {/* Further reduce border radius */}
        <div class="card-body p-1"> {/* Reduce padding */}
          <div class="d-flex text-black">
            <div class="flex-shrink-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder image"
                class="img-fluid"
                style={{ width: "80px", borderRadius: "6px" }} /> {/* Reduce image width and border radius */}
            </div>
            <div class="flex-grow-1 ms-1"> {/* Reduce margin-start */}
              <h6 class="mb-0">Shreyas kodial</h6> {/* Use a smaller heading */}
              <p class="mb-0 pb-0" style={{ color: "#2b2a2a", fontSize: "12px" }}>Manager</p> {/* Further reduce font size */}
              <div class="d-flex justify-content-between rounded-3 p-0 mb-0" style={{ backgroundColor: "#efefef" }}>
               
            
               
              </div>
              <div class="d-flex pt-0">
               
                <button type="button" class="btn btn-primary flex-grow-1 btn-sm">profile</button> {/* Added btn-sm for smaller buttons */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

                        </div>
                    </div>
                {/*     <!-- Nav --> */}
                    <ul class="nav nav-tabs mt-4 overflow-x border-0">
                        <li class="nav-item ">
                            <NavLink to={'/dashbord'} class="nav-link active">All files</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to={'/dashbordMsz'} class="nav-link font-regular">Messages</NavLink>
                        </li>
                       <li class="nav-item">
                            <NavLink to={'/dashbordMsz'} class="nav-link font-regular">Shared</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        {/* <!-- Main --> */}
        <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
               {/*  <!-- Card stats --> */}
                <div class="row g-6 mb-6">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total Bookings</span>
                                        <span class="h3 font-bold mb-0">{bookings.length}</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                            <i class="bi bi-credit-card"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>13%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total Messages</span>
                                        <span class="h3 font-bold mb-0">{messages.length}</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                            <i class="bi bi-people"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>30%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2"> Total Booked </span>
                                        <span class="h3 font-bold mb-0">{savedBookings.length}</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                            <i class="bi bi-clock-history"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-danger text-danger me-2">
                                        <i class="bi bi-arrow-down me-1"></i>-5%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <span class="h6 font-semibold text-muted text-sm d-block mb-2">Work load</span>
                                        <span class="h3 font-bold mb-0">95%</span>
                                    </div>
                                    <div class="col-auto">
                                        <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                            <i class="bi bi-minecart-loaded"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2 mb-0 text-sm">
                                    <span class="badge badge-pill bg-soft-success text-success me-2">
                                        <i class="bi bi-arrow-up me-1"></i>10%
                                    </span>
                                    <span class="text-nowrap text-xs text-muted">Since last month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card shadow border-0 mb-7">
                    <div class="card-header">
                        <h5 class="mb-0">Applications</h5>
                    </div>
                    <div class="table-responsive">
                    <Pagination itemsPerPage={8} data={bookings} />
                    </div>
                    
                    <div class="card-footer border-0 py-3">
                        {/* <span class="text-muted text-sm">Showing 10 items out of 250 results found</span> */}
                    </div>
                </div>


                <div class="card shadow border-0 mb-7">
                    <div class="card-header">
                        <h5 class="mb-0">Messages</h5>
                    </div>
                    <div class="table-responsive">
                    <PaginationMsz itemsPerPage={8} data={messages} />
                    </div>
                    <div class="card-footer border-0 py-2">
                        {/* <span class="text-muted text-sm">Showing 10 items out of 250 results found</span> */}
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
    </div>
  )
}

export default Dashboard
