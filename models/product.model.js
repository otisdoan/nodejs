const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  discountPercentage: Number,
  category: String,
  price: Number,
  stock: Number,
  status: String,
  deleted: Boolean,
  position: Number,
  thumbnail: String
})

const Product = mongoose.model("Product", productSchema, 'products')
module.exports = Product;