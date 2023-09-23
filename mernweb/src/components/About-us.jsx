import React from 'react'

const AboutUs = () => {
  return (
    <div>


<section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Services</h3>
                            <h1 className="display-6 text-center mb-4">Our <b>Mission </b> Vision</h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                 



                    <div className="row mt-5">

                    <div className="col-md-4">
                            <div class="card p-3 ">
                           
                            <div class="card-body text-center">
                                    <i className="fa fa-car fa-4x mb-4 text-primary"></i>

                                    <h5 class="card-title mb-3 fs-4 fw-bold">Efficiency and Reliability</h5>
                                    <p class="card-text lead">We aim to deliver prompt and dependable taxi services, ensuring that travelers can rely on us for timely and comfortable rides to their destinations.</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3 ">
                           
                               
                                <div class="card-body text-center">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>

                                    <h5 class="card-title mb-3 fs-4 fw-bold">Customer-Centric Approach</h5>
                                    <p class="card-text lead">We are dedicated to placing our customers at the forefront of everything we do. Our services and features are designed to cater to their needs.</p>
                                   
                                </div>
                            </div>
                        </div>

                      


                        <div className="col-md-4">
                            <div class="card p-3 ">
                           
                                <div class="card-body text-center">
                                    <i className="fa fa-map-marker fa-4x mb-4 text-primary"></i>

                                    <h5 class="card-title mb-3 fs-4 fw-bold">Expanding Accessibility</h5>
                                    <p class="card-text lead"> We envision extending our services to a wider geographical reach, ensuring that more travelers can access convenient and reliable outstation travel options.</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


      <section id="about">
        <div className="container my-5 py-5">
            <div className="row">
            <div className="col-md-6">
          <img className="w-90 shadow" height={500} src={require("../assets/about2.webp")} alt="About" />
        </div>
                   <div className="col-md-6">
                    <h3 className="fs-5">About Us</h3>
                    <h1 className="display-6  mb-2">Who <b >we </b> Are</h1>
                    <hr className='w-50'/>
                    <p className="lead mb-4">  <b className='text-primary'>Taxipik</b> is leading outstation taxi provider in India. We strive to make the cab booking an easy and comfortable experience through our online cab booking service. Wherever you travel in India, we have got a cab for you. You can choose from a small hatchback car or comfortable sedan (Dzire, Etios) car or an suv (Innova, Xylo), if you are big family or even Tempo-traveller if you are large travel group like a <b className='text-primary'>Taxipik</b>. We assure you of clean cars in good condition, courteous drivers with good knowledge of the tourist places, very competitive prices, transparent automatic billing and a very reliable service in totality. 

                     </p>
                     <button className="btn btn-primary rounded-pill px-4 py-2">Get started</button>
                     <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                   </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs;
