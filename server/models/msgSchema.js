const mongoose = require('mongoose');

// Message Schema or document structure
const msgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },

});

// Create model
const Message = mongoose.model('Message', msgSchema);

module.exports = Message;
