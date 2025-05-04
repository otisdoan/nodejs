const express = require('express');
const route = express.Router();
const productsController = require('../../controllers/admin/products/products.controller')
const multer = require('multer');
const storage = require('../../helpers/storageMulter');
const upload = multer({ storage: storage() })
const validate = require('../../validates/admin/product.validate');

route.get('/', productsController.index);
route.patch('/change-status/:status/:id', productsController.changeStatus);
route.patch('/change-multi', productsController.changeMulti)
route.delete('/delete/:id', productsController.deleteProduct)
route.get('/create', productsController.create);
route.post('/create', upload.single('thumbnail'), validate.validateCreate, productsController.createPost);

module.exports = route;