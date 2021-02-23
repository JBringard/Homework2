const Express = require('express');

const UserController = require('../controllers/user.controller');

const router = Express.Router();

router.get('/users', UserController.getUsers);

router.get('/users/:SSN', UserController.getUser);

router.post('/users', UserController.postUser);

router.delete('/users', UserController.deleteUsers);

router.delete('/users/:SSN', UserController.deleteUser);

router.put('/users/:SSN', UserController.putUser);

router.patch('/users/:SSN', UserController.patchUser);

module.exports = router;
