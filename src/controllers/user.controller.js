const UserService = require('../services/user.service');

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

exports.getUsers = async function (req, res) {
  await doActionThatMightFailValidation(req, res, UserService.getUsers(req, res));
};
exports.getUser = async function (req, res) {
  await doActionThatMightFailValidation(req, res, UserService.getUser(req, res));
};
exports.postUser = async function (req, res) {
  await doActionThatMightFailValidation(req, res, UserService.postUser(req, res));
};
exports.deleteUsers = async function (req, res) {
  await doActionThatMightFailValidation(req, res, UserService.deleteUsers(req, res));
};
exports.deleteUser = async function (req, res) {
  await doActionThatMightFailValidation(req, res, UserService.deleteUser(req, res));
};
exports.putUser = async function (req, res) {
  await doActionThatMightFailValidation(req, res, UserService.putUser(req, res));
};
exports.patchUser = async function (req, res) {
  await doActionThatMightFailValidation(req, res, UserService.patchUser(req, res));
};
