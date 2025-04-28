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
  let skipProducts;
  const totalProducts = await Products.find(find).countDocuments();
  const sizePage = 2;

  if (req.query.page || 1) {
    skipProducts = (req.query.page - 1) * sizePage;
  }

  const products = await Products.find(find).limit(sizePage).skip(skipProducts || 0);
  const newProduct = products.map((item) => {
    item.displayStatus = item.status === 'active' ? 'Hoạt động' : 'Dừng hoạt động'
    item.classStatus = item.status === 'active' ? 'btn-success' : 'btn-danger'
    return item;
  })
  res.render('admin/pages/products/index', {
    products: newProduct,
    searchs: req.query.searchs,
    totalProducts: Array(Math.ceil(totalProducts / sizePage))
  })
}

module.exports.changeStatus = async (req, res) => {
  Products.findByIdAndUpdate(req.params.id,
    {
      status: req.params.status
    },
    { new: true }
  )
    .then(updatedUser => {
      console.log('Người dùng sau khi cập nhật:', updatedUser);
    })
    .catch(err => {
      console.error('Lỗi khi cập nhật:', err);
    });
}