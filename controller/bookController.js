const getAllBooks = async (req, res) => {
  res.json({ data: 'hello, books' });
};

module.exports = { getAllBooks };
