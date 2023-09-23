
// IMPORT ALL DEPENDENCIES

const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Configure ENV file && Require Connection file
dotenv.config({ path: './config.env' });
require('./db/conn');
const port = process.env.PORT;

// Require model
const User = require('./models/userSchema');
const Message =require('./models/msgSchema');
const Book=require('./models/bookSchema');



// This method is used to get data and cookies from the front-end
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('hello world');
});




// Registration
app.post('/register', async (req, res) => {
  try {
    // Get body or data
    const { username, email, password } = req.body;

    const createUser = new User({
      username: username,
      email: email,
      password: password,
    });

    // Save method is used to create user or insert user
    // but before saving or inserting, the password will be hashed
    // after hashing, it will be saved to the db
    const created = await createUser.save();
    console.log(created);
    res.status(200).send('Registered');
  } catch (error) {
    res.status(400).send(error);
  }
});



// Login User
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user if exists
    const user = await User.findOne({ email: email });
    if (user) {
      // Verify password
      const isMatch = await bcryptjs.compare(password, user.password);

      if (isMatch) {
        // Generate token defined in the user schema
        const token = await user.generateToken();
        res.cookie('jwt', token, {
          // Expires token in 24 hours
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
        });
        res.status(200).send('LoggedIn');
      } else {
        res.status(400).send('Invalid Credentials');
      }
    } else {
      res.status(400).send('Invalid Credentials');
    }
  } catch (error) {
    res.status(400).send(error);
  }
});




// Message
app.post('/message', async (req, res) => {
  try {
    // Get body or data
const name =req.body.name;
const email =req.body.email;
const message =req.body.message;


    const sendMsg = new Message({
      name: name,
      email: email,
      message: message
    });

    // Save method is used to create user or insert user
    // but before saving or inserting, the password will be hashed
    // after hashing, it will be saved to the db
    const created = await sendMsg.save();
    console.log(created);
    res.status(200).send('sent');
  } catch (error) {
    res.status(400).send(error);
  }
});



app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching messages.' });
  }
});


// Assuming you've imported the required dependencies and the Message model
app.put('/messages/:id', async (req, res) => {
  try {
    const messageId = req.params.id;
    const { name, email, message } = req.body;

    const updatedMsg = await Message.findByIdAndUpdate(
      messageId,
      { name, email, message },
      { new: true, runValidators: true }
    );

    if (!updatedMsg) {
      return res.status(404).json({ message: 'Message not found' });
    }

    res.status(200).json(updatedMsg);
  } catch (error) {
    res.status(400).json({ message: 'Error updating message', error });
  }
});


// DELETE route to delete a message by ID
app.delete('/messages/:id', async (req, res) => {
  try {
    const deletedMessage = await Message.findByIdAndDelete(req.params.id);

    if (!deletedMessage) {
      return res.status(404).json({ message: 'Message not found' });
    }

    return res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting message' });
  }
});




// pickup book
app.post('/book', async (req, res) => {
  try {
    // Get body or data
const pickup =req.body.pickup;
const drop =req.body.drop;
const capacity =req.body.capacity;
const email =req.body.email;
const startdate =req.body.startdate;
const enddate =req.body.enddate;
const phone =req.body.phone;


    const sendBook = new Book({
      pickup: pickup,
      drop: drop,
      capacity: capacity,
      email: email,
      startdate: startdate,
      enddate: enddate,
      phone: phone
    });

    // Save method is used to create user or insert user
    // but before saving or inserting, the password will be hashed
    // after hashing, it will be saved to the db
    const created = await sendBook.save();
    console.log(created);
    res.status(200).send('sent');
  } catch (error) {
    res.status(400).send(error);
  }
});

//Booking 
app.get('/bookings', async (req, res) => {
  try {
    const bookings = await Book.find();

    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching booked pickups.' });
  }
});





// Update book
app.put('/book/:id', async (req, res) => {
  try {
    const bookId = req.params.id;

    // Get updated data from request body
    const updatedData = {
      pickup: req.body.pickup,
      drop: req.body.drop,
      capacity: req.body.capacity,
      email: req.body.email,
      startdate: req.body.startdate,
      enddate: req.body.enddate,
      phone: req.body.phone
    };


    // Find the book by ID and update it with the new data
    const updatedBook = await Book.findByIdAndUpdate(bookId, updatedData, {
      new: true // Returns the updated document
    });

    if (!updatedBook) {
      return res.status(404).send('Book not found');
    }

    console.log(updatedBook);
    res.status(200).send('updated');
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE route to delete a Booking by ID
app.delete('/bookings/:id', async (req, res) => {
  try {
    const deletedBooking = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    return res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting booking' });
  }
});



// Assuming you have a separate MongoDB model for the other table, e.g., SavedBooking
const SavedBooking = require('./models/savedbooking');

app.post('/savebooking', async (req, res) => {
  try {
    const bookingData = req.body;

    // Create a new SavedBooking using the booking data
    const savedBooking = new SavedBooking(bookingData);
    await savedBooking.save();

    res.status(201).send('Booking saved in another table');
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).send('Error saving booking in another table');
  }
});


// GET route to fetch saved bookings from the new table
app.get('/savedbookings', async (req, res) => {
  try {
    // Fetch saved bookings from the new table
    const savedBookings = await SavedBooking.find();
    res.json(savedBookings);
  } catch (error) {
    console.error('Error fetching saved bookings:', error);
    res.status(500).json({ error: 'Error fetching saved bookings.' });
  }
});





//SMTP FOR BOOKING CONFORMATION
app.post('/confirm-booking/:id', async (req, res) => {
  try {
    // Process the booking confirmation, update database, etc.
    const savedBookingId = req.params.id;
    
    // Retrieve booking details using the savedBookingId
    const booking = await Book.findById(savedBookingId);
    
    if (!booking) {
      return res.status(404).send('Booking not found');
    }

    // Destructure the properties you want from the booking object
    const { email,pickup,drop, capacity,startdate,enddate} = booking;
    
    // Create a transporter using your email service provider's settings
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or another email service provider
      auth: {
        user: 'shreyaskodial98@gmail.com',
        pass: 'vvzjcisacsuiuqut', // use app-specific password if enabled
      },
    });

    // Customize the email content
    const emailContent = `
      Dear customer,

      Your booking with the following details has been confirmed:
      
      Pickup Location: ${pickup}
      Drop Location: ${drop}
      Capacity: ${capacity}
      Email: ${email}
      Start Date: ${startdate}
      End Date: ${enddate}
      
      Thank you for choosing TAXIPIK services!
    
      Regards,
      taxipik
    `;

    // Send confirmation email
    const info = await transporter.sendMail({
      from: 'shreyaskodial98@gmail.com',
      to: email, // Send to the retrieved email address
      subject: 'Booking Confirmation by TAXIPIK',
      text: emailContent,
    });

    console.log('Booking confirmation email sent:', info.response);
    res.status(200).send('Booking confirmed and email sent');
  } catch (error) {
    console.error('Error confirming booking and sending email:', error);
    res.status(500).send('Error confirming booking and sending email');
  }
});






// DELETE route to delete a saved booking from the new table
app.delete('/savedbookings/:id', async (req, res) => {
  try {
    const savedBookingId = req.params.id;

    // Delete the saved booking by its ID
    const deletedBooking = await SavedBooking.findByIdAndDelete(savedBookingId);

    if (!deletedBooking) {
      return res.status(404).send('Saved booking not found');
    }

    res.status(200).send('Saved booking deleted');
  } catch (error) {
    console.error('Error deleting saved booking:', error);
    res.status(500).send('Error deleting saved booking');
  }
});


//Logout page
app.get('/logout',(req,res)=>{
  res.clearCookie("jwt",{path:'/'})
  res.status(200).send("User Logged Out")
})



// RUN SERVER

app.listen(port, () => {
  console.log('Server is listening');
});

//our backend is done and stroe data in database
//now its connect front end with database







