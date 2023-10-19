const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    book_name: String,
    author: String,
    description: String,
    price: String,
    image: String,
    language: String
})

module.exports = mongoose.model('Product', ProductSchema);