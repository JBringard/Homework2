const Product = require('../models/product.model');

exports.getProducts = async function (request, response) {
  response.json(await Product.find(request.query).select('-_id -__v'));
};
exports.getProduct = async function (request, response) {
  const getResult = await Product.findOne({ sku: request.params.sku }).select('-_id -__v');
  if (getResult != null) {
    response.json(getResult);
  } else {
    response.sendStatus(404);
  }
};
exports.postProduct = async function (request, response) {
  await new Product(request.body).save();
  response.sendStatus(201);
};
exports.deleteProducts = async function (request, response) {
  response.sendStatus((await Product.deleteMany(request.query)).deletedCount > 0 ? 200 : 404);
};
exports.deleteProduct = async function (request, response) {
  response.sendStatus((await Product.deleteOne({
    sku: request.params.sku,
  })).deletedCount > 0 ? 200 : 404);
};
exports.putProduct = async function (request, response) {
  const { sku } = request.params;
  const product = request.body;
  product.sku = sku;
  await Product.findOneAndReplace({ sku }, product, {
    upsert: true,
  });
  response.sendStatus(200);
};
exports.patchProduct = async function (request, response) {
  const { sku } = request.params;
  const product = request.body;
  delete product.sku;
  const patchResult = await Product
    .findOneAndUpdate({ sku }, product, {
      new: true,
    })
    .select('-_id -__v');
  if (patchResult != null) {
    response.json(patchResult);
  } else {
    response.sendStatus(404);
  }
};
