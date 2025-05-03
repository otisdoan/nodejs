const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  discountPercentage: Number,
  category: {
    type: String,
    default: 'beauty'
  },
  price: Number,
  stock: Number,
  status: String,
  deleted: {
    type: Boolean,
    default: false
  },
  position: Number,
  thumbnail: String,
  deletedAt: Date,
}, {
  timestamps: true
})

const Product = mongoose.model("Product", productSchema, 'products')
module.exports = Product;