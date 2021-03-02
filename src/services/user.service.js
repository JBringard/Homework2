const User = require('../models/user.model');

exports.retrieveUsers = async function (filter) {
  return User.find(filter).select('-_id -__v');
};

exports.retrieveUser = async function (filter) {
  return User.findOne({ SSN: filter }).select('-_id -__v');
};

exports.createUser = async function (userSent) {
  await new User(userSent).save();
};

exports.deleteUsers = async function (filter) {
  return (await User.deleteMany(filter)).deletedCount;
};

exports.deleteUser = async function (filter) {
  return (await User.deleteOne({ SSN: filter })).deletedCount;
};

exports.replaceUser = async function (params, userSent) {
  const { SSN } = params;
  const user = userSent;
  user.SSN = SSN;
  await User.findOneAndReplace({ SSN }, user, {
    upsert: true,
  });
};

exports.updateUser = async function (params, userSent) {
  const { SSN } = params;
  const user = userSent;
  delete user.SSN;
  return User
    .findOneAndUpdate({ SSN }, user, {
      new: true,
    })
    .select('-_id -__v');
};
