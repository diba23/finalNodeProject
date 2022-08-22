const express = require('express');
const ParticipantsChoseController = require("../controller");

const router = express.Router();

router.post('/:id', ParticipantsChoseController.addParticipantsChose);

module.exports = router;