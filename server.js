const express = require('express');
const cors = require('cors');
const db = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/auth', authRoutes);

db.then(() => {
  console.log('Connected to MongoDB database');
  app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
  });
});

// Todo auth routes for user
