const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/Books-Project');

module.exports = db;
