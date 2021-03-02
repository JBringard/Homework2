/* eslint-disable max-len */
const ProductService = require('../services/product.service');
const Utils = require('../utils');

exports.getProducts = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, () => ProductService.retrieveProducts(req.query));
};

exports.getProduct = async function (req, res) {
  await Utils.checkIfResultIsNull(req, res, () => ProductService.retrieveProduct(req.params.sku));
};

exports.postProduct = async function (req, res) {
  await Utils.createEntityValidation(req, res, () => ProductService.createProduct(req.body));
};

exports.deleteProducts = async function (req, res) {
  await Utils.deleteValidation(req, res, () => ProductService.deleteProducts(req.query));
};

exports.deleteProduct = async function (req, res) {
  await Utils.deleteValidation(req, res, () => ProductService.deleteProduct(req.params.sku));
};

exports.putProduct = async function (req, res) {
  await Utils.replaceEntityValidation(req, res, () => ProductService.replaceProduct(req.params, req.body));
};

exports.patchProduct = async function (req, res) {
  await Utils.checkIfResultIsNull(req, res, () => ProductService.updateProduct(req.params, req.body));
};
