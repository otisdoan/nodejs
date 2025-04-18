const express = require('express');
const route = express.Router();
const productController = require('../../controllers/client/product.controller')

route.get('/', productController.index);

module.exports = route;