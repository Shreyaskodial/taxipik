const nodemailer = require('nodemailer');

const sendConfirmationEmail = (bookingData) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shreyaskodial98@gmail.com',
      pass: '866057@Ss'
      // user: process.env.EMAIL_USER,
      // pass:  process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: 'shreyaskodial98@gmail.com',
    to: bookingData.email, // Replace with the recipient's email
    subject: 'Booking Confirmation by TAXIPIK',
    text: `Dear ${bookingData.name},\n\nYour booking has been confirmed.\n\nRegards,\nThe Bookings Team`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = sendConfirmationEmail;
