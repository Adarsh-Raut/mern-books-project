const express = require('express');
const cors = require('cors');
const db = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);

db.then(() => {
  console.log('Connected to MongoDB database');
  app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
  });
});

// Todo create user database table
// Todo create book database table
