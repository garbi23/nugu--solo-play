const express = require('express');
const nugu = require('../nugu');
const router = express.Router();

router.post(`/nugu/CLAP_ACTION`, nugu);
router.post(`/nugu/NUMBER_ACTION`, nugu);
router.post(`/nugu/GAME_THREENINESIX`, nugu);
router.post(`/nugu/GAMEACTION_STOP`, nugu);
router.post(`/nugu/GAMEACTION_STOP_INSERT`, nugu);
router.post(`/nugu/WATER_ALLSTAT`, nugu);
router.post(`/nugu/WATER_STAT`, nugu);
router.post(`/nugu/WATER_TEMP`, nugu);
router.post(`/nugu/WATER_HUMI`, nugu);
router.post(`/nugu/WATER_ALL_ACTION`, nugu);
router.post(`/nugu/GAME_RCP`, nugu);


module.exports = router;
