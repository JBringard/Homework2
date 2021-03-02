const Express = require('express');

const router = Express.Router();
const UserController = require('../controllers/user.controller');

router.get('/', UserController.getUsers);

router.get('/:SSN', UserController.getUser);

router.post('/', UserController.postUser);

router.delete('/', UserController.deleteUsers);

router.delete('/:SSN', UserController.deleteUser);

router.put('/:SSN', UserController.putUser);

router.patch('/:SSN', UserController.patchUser);

module.exports = router;
