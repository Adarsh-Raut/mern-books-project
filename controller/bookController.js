const Book = require('../models/bookSchema');

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, imageUrl, quote } = req.body;
    const book = await Book.create({ title, author, imageUrl, quote });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error);
  }
};

module.exports = { getBooks, createBook };
