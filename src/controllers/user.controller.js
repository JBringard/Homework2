const UserService = require('../services/user.service');
const Utils = require('../utils');

exports.getUsers = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, UserService.getUsers(req));
};
exports.getUser = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, UserService.getUser(req, res));
};
exports.postUser = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, UserService.postUser(req, res));
};
exports.deleteUsers = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, UserService.deleteUsers(req, res));
};
exports.deleteUser = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, UserService.deleteUser(req, res));
};
exports.putUser = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, UserService.putUser(req, res));
};
exports.patchUser = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, UserService.patchUser(req, res));
};
