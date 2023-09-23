import React from 'react'
import AboutUs from '../components/About-us'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'
import NavbarSec from '../components/navbarSec'


const About = () => {
  return (
    <div className='section1'>
      <NavbarSec/>
      <HomePage/>

     
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default About
