const express = require('express');
const Participants = require('../controller');

const router = express.Router();

router.get('/:link', Participants.showAllPollChose);

module.exports = router;