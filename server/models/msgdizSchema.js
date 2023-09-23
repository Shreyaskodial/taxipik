const mongoose = require('mongoose');

// Define a schema and model
const ItemSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
  });
  const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
