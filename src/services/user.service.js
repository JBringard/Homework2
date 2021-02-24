const User = require('../models/user.model');

exports.getUsers = async function (request) {
  return User.find(request.query).select('-_id -__v');
};
exports.getUser = async function (request, response) {
  const getResult = await User.findOne({ SSN: request.params.SSN }).select('-_id -__v');
  if (getResult != null) {
    response.json(getResult);
  } else {
    response.sendStatus(404);
  }
};
exports.postUser = async function (request, response) {
  await new User(request.body).save();
  response.sendStatus(201);
};
exports.deleteUsers = async function (request, response) {
  response.sendStatus((await User.deleteMany(request.query)).deletedCount > 0 ? 200 : 404);
};
exports.deleteUser = async function (request, response) {
  response.sendStatus((await User.deleteOne({
    SSN: request.params.SSN,
  })).deletedCount > 0 ? 200 : 404);
};
exports.putUser = async function (request, response) {
  const { SSN } = request.params;
  const user = request.body;
  user.SSN = SSN;
  await User.findOneAndReplace({ SSN }, user, {
    upsert: true,
  });
  response.sendStatus(200);
};
exports.patchUser = async function (request, response) {
  const { SSN } = request.params;
  const user = request.body;
  delete user.SSN;
  const patchResult = await User
    .findOneAndUpdate({ SSN }, user, {
      new: true,
    })
    .select('-_id -__v');
  if (patchResult != null) {
    response.json(patchResult);
  } else {
    response.sendStatus(404);
  }
};
