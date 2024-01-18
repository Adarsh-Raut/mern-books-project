const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
const userRegistration = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userWithMail = await User.findOne({ email });
    if (userWithMail)
      return res
        .status(500)
        .json({ message: 'User with same email already exists.' });
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json({ data: 'success' });
  } catch (error) {
    res.status(500).json({ data: 'failure', error: error.message });
    console.log(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found.' });
    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect)
      return res.status(400).json({ message: 'Invalid credentials.' });
    const token = jwt.sign({ id: user._id }, 'supersecretkey');
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(403).json({ data: 'failure', message: error.message });
    console.log(error);
  }
};

module.exports = { userRegistration, userLogin };
