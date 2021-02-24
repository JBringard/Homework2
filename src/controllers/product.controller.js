const ProductService = require('../services/product.service');
const Utils = require('../utils');

exports.getProducts = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, ProductService.getProducts(req, res));
};
exports.getProduct = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, ProductService.getProduct(req, res));
};
exports.postProduct = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, ProductService.postProduct(req, res));
};
exports.deleteProducts = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, ProductService.deleteProducts(req, res));
};
exports.deleteProduct = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, ProductService.deleteProduct(req, res));
};
exports.putProduct = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, ProductService.putProduct(req, res));
};
exports.patchProduct = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, ProductService.patchProduct(req, res));
};
