const ProductCategory = require('../../../models/products-category.model')

module.exports.index = async (req, res) => {
  const category = await ProductCategory.find({ deleted: false });
  res.render('admin/pages/products-category/index', {
    category: category
  });
}

module.exports.createUI = async (req, res) => {
  const category = await ProductCategory.find({ deleted: false });
  function createTree(arr, parentId = '') {
    const tree = [];
    arr.forEach((item) => {
      if (item.parent_id === parentId) {
        const children = createTree(arr, item.id);
        if (children.length > 0) {
          item.children = children;
        }
        tree.push(item)
      }
    })
    return tree;
  }
  const newCategory = createTree(category);
  res.render('admin/pages/products-category/create', {
    category: newCategory
  });
}

module.exports.createPost = async (req, res) => {
  console.log(req.body)
  const productCategory = new ProductCategory({
    ...req.body,
    thumbnail: req.file.path
  })
  await productCategory.save();
  res.redirect('/admin/products-category');
}