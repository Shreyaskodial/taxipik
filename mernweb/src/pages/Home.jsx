import React from 'react'
import AboutUs from '../components/About-us'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'
import NavbarSec from '../components/navbarSec'
import ServicesUs from '../components/ServicesUs'
import Slider from '../components/Slider'



const Home = () => {
  return (
    <div className='section1'>
      <NavbarSec/>
      <div className="container p-4"></div>
      <Slider/>
      <div className="container my-4 py-5"> </div>
      <HomePage/>
      <ServicesUs/>
      <Footer/>
    </div>
  )
}

export default Home
