const ProductCategory = require('../../../models/products-category.model')

module.exports.index = (req, res) => {
  res.render('admin/pages/products-category/index');
}

module.exports.createUI = (req, res) => {
  res.render('admin/pages/products-category/create');
}

module.exports.createPost = async (req, res) => {
  console.log(req.body)
  const productCategory = new ProductCategory({
    ...req.body,
    thumbnail: req.file.path
  })
  await productCategory.save();
  res.redirect('/admin/products-category');
}