const Products = require('../../../models/product.model')
module.exports.index = async (req, res) => {

  let find = {
    deleted: false
  }

  if (req.query.status) {
    find.status = req.query.status
  }

  if (req.query.searchs) {
    find.title = {
      $regex: `^${req.query.searchs}`,
      $options: 'i'
    }
  }

  const products = await Products.find(find);
  const newProduct = products.map((item) => {
    item.displayStatus = item.status === 'active' ? 'Hoạt động' : 'Dừng hoạt động'
    item.classStatus = item.status === 'active' ? 'btn-success' : 'btn-danger'
    return item;
  })
  res.render('admin/pages/products/index', {
    products: newProduct,
    searchs: req.query.searchs
  });
}