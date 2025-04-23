const express = require('express');
const route = express.Router();
const productsController = require('../../controllers/admin/products/products.controller')

route.get('/', productsController.index);

module.exports = route;