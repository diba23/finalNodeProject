const express = require('express');
const UserController = require('../controller');

var router = express.Router();
const UserControllerInstance = new UserController();

/* we just need post to get user and check it and return staus ok. */
router.post('/', UserControllerInstance.checkLogIn)

module.exports = router;
