import React from 'react'

import Footer from '../components/Footer'

import NavbarSec from '../components/navbarSec'
import Pickup from '../components/Pickup'


const Mangalore = () => {



  
  return (
    <div className='section1'>
       <div className="container p-4"></div>
        <div id="carouselExampleCaptions" class="carousel slide">
      <NavbarSec/>
      <div class="carousel-inner">
        <div class="carousel-item active position-relative pb-4">

          <img class="d-block w-100" height={50} src={require("../assets/mangalore.jpg")} alt="..." />
          <div className="    position-absolute top-50 start-50 translate-middle">

       <Pickup/>
       
      
          </div>
          <div class="container text-center p-3 bg-white rounded-pill shadow border-2">
  <div class="row ">
    <div class="col order-last">
   <b> No over-pricing</b>
   <p className='text-secondary text-small'>Cheapest costs | Competitive prices</p>
    </div>
    <div class="col">
   <b> No return fare</b>
   <p className='text-secondary text-small'>One-Way cab fare | No hidden charges</p>
    </div>
    <div class="col order-first">
   <b> Tourist Attractions</b>
<p className='text-secondary text-small'>Pay as you go</p>

    </div>
  </div>
</div>
        </div>

      </div>


     


      
      <div className="container p-5"></div>
     


{/* <div>

      <div class="clearfix">
      <img class="col-md-6 float-md-end mb-3 ms-md-3" height={50} src={require("../assets/c1.jpg")} alt="..." />
  <p>
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p>
</div>
</div> */}


{/* cards */}


<div class="row row-cols-1 m-4 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
    <img class="d-block w-100" height={50} src={require("../assets/Popularplaces/PanamburBeach.jpg")} alt="..." />
      <div class="card-body">
        <h5 class="card-title">Panambur Beach</h5>
        <p class="card-text">Panambur Beach is a lively and well-maintained beach known for its golden sands and pristine waters. It's a favorite spot for relaxation, beach activities, and the annual Kite Festival.</p>
      </div>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
 
  <button type="button" class="btn btn-outline-primary">Book Here</button>
 
</div>
      <div class="card-footer">
        <small class="text-body-secondary"></small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img class="d-block w-100" height={50} src={require("../assets/Popularplaces/MangaladeviTemple.jpg")} alt="..." />
      <div class="card-body">
        <h5 class="card-title">Mangaladevi Temple</h5>
        <p class="card-text">Mangaladevi Temple is an ancient temple dedicated to Goddess Mangaladevi, from whom Mangalore derives its name. The temple's architecture and the tranquil surroundings make it a place of cultural significance.</p>
     
      </div>
      <button type="button" class="btn btn-outline-primary">Book Here</button>
      <div class="card-footer">
        <small class="text-body-secondary"></small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img class="d-block w-100" height={50} src={require("../assets/Popularplaces/AloysiusChapel.jpeg")} alt="..." />
      <div class="card-body">
        <h5 class="card-title">St. Aloysius Chapel</h5>
        <p class="card-text">St. Aloysius Chapel is renowned for its exquisite frescoes that depict various scenes from the life of Jesus Christ. The intricate artwork makes it a must-visit for art and history enthusiasts.</p>
      </div>
      <button type="button" class="btn btn-outline-primary">Book Here</button>
      <div class="card-footer">
        <small class="text-body-secondary"></small>
      </div>
    </div>
  </div>
</div>


<div className="container p-5"></div>

      <Footer/>

    </div></div>
  )
}

export default Mangalore
