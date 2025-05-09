
module.exports.index = (req, res) => {
  res.render('admin/pages/products-category/index');
}

module.exports.createUI = (req, res) => {
  res.render('admin/pages/products-category/create');
}

module.exports.createPost = (req, res) => {
  console.log(req.body)
  res.send('Ok');
}