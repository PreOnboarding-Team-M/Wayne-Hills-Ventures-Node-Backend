const express = require('express');
const userServices = require('../services/user')
const router = express.Router();

router.post('/user/signUp', userServices.signUp);

module.exports = router;
