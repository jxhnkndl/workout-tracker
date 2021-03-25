// Import Mongoose
const mongoose = require('mongoose');

// Init Mongoose schema constructor
const Schema = mongoose.Schema;

// Define schema for Workouts collection
const WorkoutSchema = new Schema({

});

// Compile Workout schema into model to create documents from
const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;