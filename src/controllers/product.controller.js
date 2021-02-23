const ProductService = require('../services/product.service');

const doActionThatMightFailValidation = async (request, response, action) => {
  try {
    await action();
  } catch (e) {
    response.sendStatus(
      e.code === 11000
            || e.stack.includes('ValidationError')
            || (e.reason !== undefined && e.reason.code === 'ERR_ASSERTION')
        ? 400 : 500,
    );
  }
};

exports.getProducts = async function (req, res) {
  await doActionThatMightFailValidation(req, res, ProductService.getProducts(req, res));
};
exports.getProduct = async function (req, res) {
  await doActionThatMightFailValidation(req, res, ProductService.getProduct(req, res));
};
exports.postProduct = async function (req, res) {
  await doActionThatMightFailValidation(req, res, ProductService.postProduct(req, res));
};
exports.deleteProducts = async function (req, res) {
  await doActionThatMightFailValidation(req, res, ProductService.deleteProducts(req, res));
};
exports.deleteProduct = async function (req, res) {
  await doActionThatMightFailValidation(req, res, ProductService.deleteProduct(req, res));
};
exports.putProduct = async function (req, res) {
  await doActionThatMightFailValidation(req, res, ProductService.putProduct(req, res));
};
exports.patchProduct = async function (req, res) {
  await doActionThatMightFailValidation(req, res, ProductService.patchProduct(req, res));
};
