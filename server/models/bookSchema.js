const { text } = require('express');
const mongoose = require('mongoose');

// Message Schema or document structure
const bookSchema = new mongoose.Schema({
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
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
