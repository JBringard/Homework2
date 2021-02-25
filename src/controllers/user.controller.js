/* eslint-disable max-len */
const UserService = require('../services/user.service');
const Utils = require('../utils');

exports.getUsers = async function (req, res) {
  await Utils.doActionThatMightFailValidation(req, res, () => UserService.retrieveUsers(req.query));
};
exports.getUser = async function (req, res) {
  await Utils.checkIfResultIsNullValidation(req, res, () => UserService.retrieveUser(req.params.SSN));
};
exports.postUser = async function (req, res) {
  await Utils.createEntityValidation(req, res, () => UserService.createUser(req.body));
};
exports.deleteUsers = async function (req, res) {
  await Utils.deleteValidation(req, res, () => UserService.deleteUsers(req.query));
};
exports.deleteUser = async function (req, res) {
  await Utils.deleteValidation(req, res, () => UserService.deleteUser(req.params.SSN));
};
exports.putUser = async function (req, res) {
  await Utils.replaceEntityValidation(req, res, () => UserService.replaceUser(req.params, req.body));
};
exports.patchUser = async function (req, res) {
  await Utils.checkIfResultIsNullValidation(req, res, () => UserService.updateUser(req.params, req.body));
};
