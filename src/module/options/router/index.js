const express = require('express');
const Options = require('../controller');
const AuthMiddleware = require("../../../core/middleware/auth");

const router = express.Router();

router.post('/', AuthMiddleware.jwtTokenValidation, Options.creatPoll);

module.exports = router;