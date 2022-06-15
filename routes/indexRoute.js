const express = require('express');
const router = express.Router();
const { signup, login, general, restricted } = require('../controller/indexRouteController');
const { check } = require('../authMiddleware/loginCheck')

router.post('/register', signup);
router.post('/login', login);
router.post('/general', general);
router.get('/restricted', check, restricted);

module.exports = router;