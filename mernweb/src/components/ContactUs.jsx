import React,{useState} from 'react'

const ContactUs = () => {




    const [msg, setMsg] = useState({
        name: "",
        email: "",
        message: ""
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
    const {name, email,message}=msg;
    try {
        //it is submitted on port 3000 by default
        //which is front end but we need to 
        //submit it on backend which is on 
        //port 4000 so we need proxy
        const res= await fetch('/message',{
        method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body :JSON.stringify({
            name,email,message
         })
        })

        if(res.status === 400 || !res){
         window.alert("Message send try again later")
        }else{

            //you need  to restart the server for proxy works
            window.alert("Message sent");
            setMsg({
                name: "",
                email: "",
                message: ""
            })
            
           
        }
    } catch (error) {
        console.log(error);
    }

   }
    

    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="col-12">
                                <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                                <h1 className="display-6 text-center mb-4">Have Some<b>Question</b> </h1>
                                <hr className='w-25 mx-auto' />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <img className='w-75 ' src={require("../assets/about1.png")} alt="About" />
                            </div>
                            <div className="col-md-6">
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Your Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="your name"
                                        name='name' value={msg.name} onChange={handleChange} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                        name='email' value={msg.email} onChange={handleChange}  />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Your extra text</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                                        name='message' value={msg.message} onChange={handleChange} ></textarea>
                                    </div>
                                    <button type="submit" className='btn btn-outline-primary rounded-pill px-4'>Send Message <i className="fa fa-paper-plane ms-2"></i> </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactUs;
