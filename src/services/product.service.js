const Product = require('../models/product.model');

exports.retrieveProducts = async function (filter) {
  return Product.find(filter).select('-_id -__v');
};
exports.retrieveProduct = async function (filter) {
  return Product.findOne({ sku: filter }).select('-_id -__v');
};
exports.createProduct = async function (productSent) {
  await new Product(productSent).save();
};
exports.deleteProducts = async function (filter) {
  return Product.deleteMany(filter).deletedCount;
};
exports.deleteProduct = async function (filter) {
  return Product.deleteOne({ sku: filter }).deletedCount;
};
exports.replaceProduct = async function (params, productSent) {
  const { sku } = params;
  const product = productSent;
  product.sku = sku;
  await Product.findOneAndReplace({ sku }, product, {
    upsert: true,
  });
};
exports.updateProduct = async function (params, productSent) {
  const { sku } = params;
  const product = productSent;
  delete product.sku;
  return Product
    .findOneAndUpdate({ sku }, product, {
      new: true,
    })
    .select('-_id -__v');
};
