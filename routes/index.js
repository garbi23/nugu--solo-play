const express = require('express');
const nugu = require('../nugu');
const router = express.Router();

router.post(`/nugu/CLAP_ACTION`, nugu);
router.post(`/nugu/NUMBER_ACTION`, nugu);
router.post(`/nugu/GAME_THREENINESIX`, nugu);
router.post(`/nugu/GAMEACTION_STOP`, nugu);
router.post(`/nugu/GAMEACTION_STOP_INSERT`, nugu);
router.post(`/nugu/GAME_RCP`, nugu);
router.post(`/nugu/RCP_ANSWER`, nugu);
router.post(`/nugu/GAME_UPDOWN`, nugu);
router.post(`/nugu/UPDOWN_NEXT_OP`, nugu);
router.post(`/nugu/UPDOWN_NEXT_NUM`, nugu);
router.post(`/nugu/GAME_COIN`, nugu);
router.post(`/nugu/COIN_THROW`, nugu);
router.post(`/nugu/GAME_RU`, nugu);
router.post(`/nugu/RU_OP`, nugu);
router.post(`/nugu/RU_SHOOT`, nugu);
router.post(`/nugu/MOD_SOLO_DRINK`, nugu);
router.post(`/nugu/MOD_RANKING_MOD`, nugu);
router.post(`/nugu/MOD_BASIC_MOD`, nugu);


module.exports = router;
