const Product = require('../../models/product.model')

module.exports.index = async (req, res) => {
    const products = await Product.find({
        deleted: "false"
    })

    const newProducts = products.map((item) => {
        item.newPrice = (item.price - (item.price * item.discountPercentage) / 100).toFixed(0);
        return item;
    })

    res.render('client/pages/products/index', {
        products: newProducts
    })
}

module.exports.detail = async (req, res) => {
    const product = await Product.findOne({ slug: req.params.slug })
    res.render('client/pages/products/detail', {
        product: product
    })
}