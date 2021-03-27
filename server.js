// Import modules
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

// Config PORT
const PORT = process.env.PORT || 3000;

// Config local db path
const LOCALDB_URI = 'mongodb://localhost/workoutdb';

// Init Express
const app = express();

// Log http requests
app.use(logger('dev'));

// Request body-parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Statically serve public directory to client
app.use(express.static('public'));

// Connect to database and start server if connection is established
mongoose
  .connect(process.env.MONGODB_URI || LOCALDB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(`Cannot connect to database:\n ${err}`));