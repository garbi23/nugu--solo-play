const express = require('express');
const nugu = require('../nugu');
const router = express.Router();

router.post(`/nugu/CLAP_ACTION`, nugu);
router.post(`/nugu/NUMBER_ACTION`, nugu);
router.post(`/nugu/GAME_THREENINESIX`, nugu);
router.post(`/nugu/GAMEACTION_STOP`, nugu);
router.post(`/nugu/GAMEACTION_STOP_INSERT`, nugu);


module.exports = router;
