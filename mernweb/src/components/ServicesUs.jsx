import React from 'react'
import { NavLink } from 'react-router-dom';
const ServicesUs = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Services</h3>
                            <h1 className="display-6 text-center mb-4">Popular <b className='text-primary'>Travel</b>   Places....</h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3 ">
                            <div class="card-body text-center">
                                <img className='w-75 mt-5 '  src={require ("../assets/ch2.jpg")} alt="About"/>

                                    <h5 class="card-title mb-3 fs-4 fw-bold">Chikmagalur</h5>
                                    <p class="card-text lead text-sm">Chikmagalur is a haven for nature enthusiasts, renowned for its coffee estates, rolling hills, and trekking trails. The Mullayanagiri Peak, Baba Budangiri Range, and Bhadra Wildlife Sanctuary are perfect for those seeking outdoor adventures and breathtaking views.</p>
                                    <NavLink  to="/chikmagalur" >  <input class="btn btn-primary ms-auto px-5" type="button" value="book"></input></NavLink>
                                </div>
                           
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3 ">
                           
                                <div class="card-body text-center">
                                <img className='w-75 mt-5 '  src={require ("../assets/service/mp1.jpg")} alt="About"/>

                                    <h5 class="card-title mb-3 fs-4 fw-bold">Mysore</h5>
                                    <p class="card-text lead text-sm">Mysore, a city steeped in history and culture, is famous for its majestic Mysore Palace, vibrant markets, and silk sarees. The Chamundi Hill, Brindavan Gardens, and St. Philomena's Church are among the city's iconic landmarks.</p>
                                    <NavLink  to="/mysorepalace" >  <input class="btn btn-primary ms-auto px-5" type="button" value="book"></input></NavLink>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div class="card p-3 ">
                           
                                <div class="card-body text-center">
                                <img className='w-75 mt-5 '  src={require ("../assets/service/jogfalls.jpg")} alt="About"/>

                                    <h5 class="card-title mb-3 fs-4 fw-bold">Coorg (Kodagu) </h5>
                                    <p class="card-text lead text-sm">Coorg, often referred to as the "Scotland of India," is a picturesque hill station known for its lush green landscapes, coffee plantations, and serene waterfalls. Visitors can explore its charming towns, visit the famous Abbey Falls, and indulge in adventure activities like trekking and river rafting.</p>
                                    <NavLink  to="/kodagu" >    <input class="btn btn-primary ms-auto px-5" type="button" value="book"></input></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3 ">
                           
                                <div class="card-body text-center">
                                <img className='w-75 mt-5 '  src={require ("../assets/service/Hampi.jpg")} alt="About"/>

                                    <h5 class="card-title mb-3 fs-4 fw-bold">Hampi</h5>
                                    <p class="card-text lead text-sm" >Hampi is a UNESCO World Heritage Site that showcases the ruins of the historic Vijayanagara Empire. Travelers can explore ancient temples, impressive stone architecture, and marvel at the surreal landscape that surrounds the Tungabhadra River.</p>
                                    <NavLink  to="/hempi" >   <input class="btn btn-primary ms-auto px-5" type="button" value="book"></input></NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3 ">
                           
                                <div class="card-body text-center">
                                <img className='w-75 mt-5 '  src={require ("../assets/service/Kapu-Beach.jpeg")} alt="About"/>

                                    <h5 class="card-title mb-3 fs-4 fw-bold">Mangalore</h5>
                                    <p class="card-text lead text-sm">Mangalore is a vibrant coastal city known for its picturesque beaches, rich cultural heritage, and delectable cuisine, Mangalore offers a perfect blend of modernity and tradition. The city boasts pristine shores like Panambur Beach and Ullal Beach, ideal for relaxation and water sports.</p>
                                    <NavLink  to="/mangalore" >  <input class="btn btn-primary ms-auto px-5" type="button" value="book"></input></NavLink>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div class="card p-3 ">
                            <div class="card-body text-center">
                                <img className='w-75 mt-4 '  src={require ("../assets/service/s1.jpg")} alt="About"/>

                                    <h5 class="card-title mb-3 fs-4 fw-bold">Gokarna</h5>
                                    <p class="card-text lead text-sm">Gokarna is a serene coastal town known for its pristine beaches, religious significance, and laid-back atmosphere. The famous Mahabaleshwar Temple and the beaches of Om and Kudle are popular attractions, offering a mix of spirituality and relaxation.</p>
                                    <NavLink  to="/gokarna" > 
                                    <input class="btn btn-primary ms-auto px-5" type="button" value="book"></input>
                </NavLink>
                                  
                                   
                                </div>


                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default ServicesUs
