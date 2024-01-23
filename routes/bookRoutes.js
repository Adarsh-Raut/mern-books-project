const express = require('express');
const {
  getBooks,
  createBook,
  deleteBook,
} = require('../controller/bookController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getBooks);
router.post('/', createBook);
router.delete('/:id', deleteBook);

module.exports = router;
