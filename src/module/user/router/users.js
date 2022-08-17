const express = require('express');
const UserController = require('../controller');

var router = express.Router();
const UserControllerInstance = new UserController();

router.post('/', UserControllerInstance.checkLogIn)

module.exports = router;
