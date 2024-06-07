const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cors());

// Connect to the MongoDB database
connectDB(); // Assuming connectDB is a function that connects to MongoDB

// Routes
app.use('/api/items', require('./routes/items')); // Example items route
app.use('/api/payment', require('./routes/payment')); // Example payment route
app.use('/api/register', require('./routes/register')); // Register route
app.use('/api/login', require('./routes/login')); // Login route



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => console.log('Server is running on port ', PORT));
