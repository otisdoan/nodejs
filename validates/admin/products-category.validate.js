module.exports.validateCreate = (req, res, next) => {
  if (!req.body.title) {
    res.redirect('/admin/products');
    return;
  }
  next();
}