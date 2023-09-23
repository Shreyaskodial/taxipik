import React,{useState} from 'react'

const Pickup = () => {





  const [msg, setMsg] = useState({
    pickup: "",
    drop: "",
    capacity: "",
    email: "",
    startdate: "",
    enddate: "",
    phone: ""
    
  });

   // Handle inputs when they change
   const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    // Update the state 'user' with the new value for the corresponding property
    setMsg({ ...msg, [name]: value });
  };


     //handle submit
const handleSubmit = async(event) =>{
event.preventDefault();
//object Destructing 
//store object data into variables
const {pickup, drop,capacity,email, startdate,enddate,phone,}=msg;
try {
    //it is submitted on port 3000 by default
    //which is front end but we need to 
    //submit it on backend which is on 
    //port 4000 so we need proxy
    const res= await fetch('/book',{
    method:"POST",
     headers:{
        "Content-Type":"application/json"
     },
     body :JSON.stringify({
      pickup,drop,capacity,email,startdate,enddate,phone
     })
    })

    if(res.status === 400 || !res){
     window.alert("Message send try again later")
    }else{

        //you need  to restart the server for proxy works
        window.alert("Message sent");
        setMsg({
          pickup: "",
          drop: "",
          capacity: "",
          email: "",
          startdate: "",
          enddate: "",
          phone: ""
          
          
        })
        
       
    }
} catch (error) {
    console.log(error);
}

}






  return (
    <div>

<div class="card p-3 ">

<div className="col text-center">
  <h4 className='pt-1 g text-white shadow   rounded'>  <i className="fa fa-car fa-1x mb-3">  Outstation area cabs </i></h4>
</div>

<form class="row g-2 pt-3" onSubmit={handleSubmit}>
  <div class="col-md-3">
    <label for="validationDefault01" class="form-label">Pickup Location</label>
    <input type="text" class="form-control" id="validationDefault01" 
     name='pickup' value={msg.pickup} onChange={handleChange} required />
  </div>
  <div class="col-md-3">
    <label for="validationDefault02" class="form-label">Drop Location</label>
    <input type="text" class="form-control" id="validationDefault02" 
     name='drop' value={msg.drop} onChange={handleChange} required />
  </div>
 

  
 <div className="col-md-2">
  <label htmlFor="validationDefaultUsername" className="form-label">Capacity</label>
  <div className="input-group">
   
    <select
      className="form-select"
      aria-label="Dropdown example"
      name='capacity'
      value={msg.capacity}
      onChange={handleChange}
    >
      <option value="">----</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
  </div>
  
</div>
<div class="col-md-3">
    <label for="validationDefault03" class="form-label">Email</label>
    <input type="email" class="form-control" id="validationDefault03" 
     name='email' value={msg.email} onChange={handleChange} required />
  </div>
<div class="col-md-3">
    <label for="validationDefault03" class="form-label">Mobile number</label>
    <input type="number" class="form-control" id="validationDefault03" 
     name='phone' value={msg.phone} onChange={handleChange} required />
  </div>
  <div class="col-md-3">
    <label for="validationDefault03" class="form-label">Start date</label>
    <input type="datetime-local" class="form-control" id="validationDefault03" 
     name='startdate' value={msg.startdate} onChange={handleChange} required />
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">End date</label>
    <input type="date" class="form-control" id="validationDefault03" 
     name='enddate' value={msg.enddate} onChange={handleChange} required />
  </div>

  

  <div class="col-md-3 mt-10">

    <button class="btn btn-primary" type="submit">Book pickup</button>
  </div>


</form>


<div class="card-body text-center">


</div>
</div>

    </div>
  )
}

export default Pickup;
