const express = require('express');
const route = express.Router();
const productsController = require('../../controllers/admin/products/products.controller')

route.get('/', productsController.index);
route.patch('/change-status/:status/:id', productsController.changeStatus);
route.patch('/change-multi', productsController.changeMulti)
route.delete('/delete/:id', productsController.deleteProduct)
route.get('/create', productsController.create);
route.post('/create', productsController.createPost);
module.exports = route;