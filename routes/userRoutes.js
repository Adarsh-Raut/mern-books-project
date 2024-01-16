const express = require('express');
const { getAllUserData } = require('../controller/userController');

const router = express.Router();

router.get('/', getAllUserData);

module.exports = router;
