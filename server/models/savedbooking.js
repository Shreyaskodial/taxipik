const mongoose = require('mongoose');

// Message Schema or document structure
const savedBookingSchema = new mongoose.Schema({
    pickup: {
        type: String,
        required: true
    },
    drop: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    startdate: {
        type: String,
        required: true
    },
    enddate: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }

});

// Create model
const SavedBooking = mongoose.model('SavedBooking', savedBookingSchema);

module.exports = SavedBooking;
