const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const productCategory = new mongoose.Schema({
  title: String,
  parent_id: { type: String, default: '' },
  desciption: String,
  thumbnail: String,
  status: String,
  deleted: { type: Boolean, default: false },
  deletedAt: Date,
  slug: { type: String, slug: 'title', unique: true }
}, {
  timestamps: true
})

const ProductCategory = mongoose.model('Category', productCategory, "products-category");

module.exports = ProductCategory;