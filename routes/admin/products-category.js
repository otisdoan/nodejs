const express = require('express');
const route = express.Router();
const categoryController = require('../../controllers/admin/products-category/products-category');
const validate = require('../../validates/admin/products-category.validate')
const upload = require('../../middlewares/upload');

route.get('/', categoryController.index);
route.get('/create', categoryController.createUI);
route.post('/create', upload.single('thumbnail'), validate.validateCreate, categoryController.createPost);

module.exports = route;
