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

  let sort = {};
  if (req.query.sortKey && req.query.sortValue) {
    sort[req.query.sortKey] = req.query.sortValue;
  }

  let skipProducts;
  const totalProducts = await Products.find(find).countDocuments();
  const sizePage = 5;

  if (req.query.page || 1) {
    skipProducts = (req.query.page - 1) * sizePage;
  }

  const products = await Products.find(find).limit(sizePage).skip(skipProducts || 0).sort(sort);
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
  await Products.findByIdAndUpdate(req.params.id,
    {
      status: req.params.status
    },
    { new: true }
  )
  res.redirect('/admin/products')
}

module.exports.changeMulti = async (req, res) => {
  switch (req.body.type) {
    case 'active':
      await Products.updateMany(
        { _id: { $in: req.body.ids.split(', ') } },
        { $set: { status: req.body.type } }
      )
      req.flash('success', 'Cập nhập thành công')
      break;
    case 'inactive':
      await Products.updateMany(
        { _id: { $in: req.body.ids.split(', ') } },
        { $set: { status: req.body.type } }
      )
      break;
    case 'delete':
      await Products.updateMany(
        { _id: { $in: req.body.ids.split(', ') } },
        { $set: { deleted: true, deletedAt: new Date() } }
      )
      break;
    default:
      break;
  }
  res.redirect('/admin/products');
}

module.exports.deleteProduct = async (req, res) => {
  await Products.findByIdAndUpdate(req.params.id, { deleted: true, deletedAt: new Date() })
  res.redirect('/admin/products')
}

module.exports.create = async (req, res) => {
  res.render('admin/pages/products/create.pug')
}

module.exports.createPost = async (req, res) => {
  const newProduct = {
    ...req.body,
    price: parseInt(req.body.price),
    discountPercentage: parseInt(req.body.discountPercentage),
    stock: parseInt(req.body.stock),
    thumbnail: req.file.path
  }
  await new Products(newProduct).save();
  res.redirect('/admin/products')

}

module.exports.edit = async (req, res) => {
  let find = {
    deleted: false,
    _id: req.params.id
  }
  const product = await Products.findOne(find);
  res.render('admin/pages/products/edit.pug', {
    product: product,
  })
}

module.exports.update = async (req, res) => {
  const updateProduct = {
    ...req.body,
    price: parseInt(req.body.price),
    discountPercentage: parseInt(req.body.discountPercentage),
    stock: parseInt(req.body.stock),
    thumbnail: req.file.path
  }
  console.log(updateProduct);
  await Products.findByIdAndUpdate({ _id: req.params.id }, updateProduct)
  res.redirect('/admin/products')
}

module.exports.detail = async (req, res) => {
  const product = await Products.findOne({ _id: req.params.id, deleted: false })
  res.render('admin/pages/products/detail.pug', {
    product: product
  })
}