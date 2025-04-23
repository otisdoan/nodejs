const Products = require('../../../models/product.model')
module.exports.index = async (req, res) => {
  const products = await Products.find({});
  const newProduct = products.map((item) => {
    item.displayStatus = item.status === 'active' ? 'Hoạt động' : 'Dừng hoạt động'
    item.classStatus = item.status === 'active' ? 'btn-success' : 'btn-danger'
    return item;
  })
  console.log(newProduct);
  res.render('admin/pages/products/index', {
    products: newProduct
  });
}