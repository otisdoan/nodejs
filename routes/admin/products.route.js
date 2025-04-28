const express = require('express');
const route = express.Router();
const productsController = require('../../controllers/admin/products/products.controller')

route.get('/', productsController.index);
route.patch('/change-status/:status/:id', productsController.changeStatus);

module.exports = route;