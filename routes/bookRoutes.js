const express = require('express');
const { getAllBooks } = require('../controller/bookController');

const router = express.Router();

router.get('/', getAllBooks);

module.exports = router;
