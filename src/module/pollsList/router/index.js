const express = require('express');
const PollsList = require('../controller');
const AuthMiddleware = require("../../../core/middleware/auth");

const router = express.Router();

router.get('/', AuthMiddleware.jwtTokenValidation, PollsList.showAllPolls);
router.get('/:id', AuthMiddleware.jwtTokenValidation, PollsList.showOnePollById);
router.put('/edith', AuthMiddleware.jwtTokenValidation, PollsList.edithOnePolls);
router.delete('/delete/:id', AuthMiddleware.jwtTokenValidation, PollsList.deleteOnePoll);

module.exports = router;