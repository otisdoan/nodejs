const express = require('express');
const route = express.Router();
const productsController = require('../../controllers/admin/products/products.controller')
const upload = require('../../middlewares/upload');
const validate = require('../../validates/admin/product.validate');

route.get('/', productsController.index);
route.patch('/change-status/:status/:id', productsController.changeStatus);
route.patch('/change-multi', productsController.changeMulti)
route.delete('/delete/:id', productsController.deleteProduct)
route.get('/create', productsController.create);
route.post('/create', upload.single('thumbnail'), validate.validateCreate, productsController.createPost);
route.get('/edit/:id', productsController.edit);
route.patch('/edit/:id', upload.single('thumbnail'), validate.validateCreate, productsController.update)
route.get('/detail/:id', productsController.detail);
module.exports = route;