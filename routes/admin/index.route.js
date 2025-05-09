const dashboardRoute = require('./dashboard.route');
const productsRoute = require('./products.route');
const categoryRoute = require('./products-category');

module.exports = (app) => {
  app.use('/admin', dashboardRoute);
  app.use('/admin/products', productsRoute);
  app.use('/admin/products-category', categoryRoute)
}