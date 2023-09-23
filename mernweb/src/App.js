
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

import Home from './pages/Home';
import Services from "./pages/Services";

import Mysorepalace from "./pages/Mysorepalace";
import Hempi from "./pages/Hempi";

import Gokarna from "./pages/Gokarna";
import Chikmagalur from "./pages/Chikmagalur";
import Kodagu from "./pages/Kodagu";
import Mangalore from "./pages/Mangalore";
import DashbordMsz from "./pages/DashbordMsz";
import Bookings from "./pages/Bookings";
import BookingsUpdate from "./pages/BookingsUpdate";
import BookConfirmed from "./pages/BookConfirmed";

// import { Router,Route } from 'react-router-dom';


function App() {
  return (
    <>

<Router>
  <Routes>
  {/* <Route path="/" element={<Home/>}/> */}
  <Route path='/' element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/service" element={<Services/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/dashbord" element={<Dashboard/>}/>
  <Route path="/logout" element={<Logout/>}/>
  <Route path="/gokarna" element={<Gokarna/>}/>
  <Route path="/mysorepalace" element={<Mysorepalace/>}/>
  <Route path="/kodagu" element={<Kodagu/>}/>
  <Route path="/hempi" element={<Hempi/>}/>
  <Route path="/mangalore" element={<Mangalore/>}/>
  <Route path="/chikmagalur" element={<Chikmagalur/>}/>
  <Route path="/dashbordMsz" element={<DashbordMsz/>}/>
  <Route path="/bookings" element={<Bookings/>}/>
  <Route path="/bookingsupdate" element={<BookingsUpdate/>}/>
  <Route path="/bookconfirmed" element={<BookConfirmed/>}/>
  </Routes>
</Router>
    </>

  );
}

export default App;


//now we have to procted out route like without login 
//you can not go to dashbord
//and after login you can not login again 
//we need protected routes
