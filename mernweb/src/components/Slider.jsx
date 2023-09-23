import React from 'react'
import { NavLink } from 'react-router-dom';
import Pickup from './Pickup';


const Slider = () => {
  return (


    <div id="carouselExampleCaptions" class="carousel slide">

      <div class="carousel-inner">
        <div class="carousel-item active position-relative">

          <img class="d-block w-100" src={require("../assets/slider.png")} alt="..." />
          <div className="    position-absolute top-50 start-50 translate-middle">

       <Pickup/>
          </div>

        </div>

      </div>

    </div>




  )
}

export default Slider;
