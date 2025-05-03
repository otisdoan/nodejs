const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

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
  slug: { type: String, slug: "title" }
}, {
  timestamps: true
})

const Product = mongoose.model("Product", productSchema, 'products')
module.exports = Product;