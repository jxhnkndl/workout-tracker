// Import modules
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Config PORT
const PORT = process.env.PORT || 3000;

// Init Express
const app = express();

// Log http requests
app.use(logger('dev'));

// Request body-parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Statically serve public directory to client
app.use(express.static("public"));

// Start listening
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});