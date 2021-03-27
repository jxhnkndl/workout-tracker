// Import Mongoose
const mongoose = require('mongoose');

// Init Mongoose schema constructor
const Schema = mongoose.Schema;

// Define schema for Workouts collection
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: [true, 'Please enter an exercise type.'],
      },
      name: {
        type: String,
        trim: true,
        required: [true, 'Please enter a name for this exercise.'],
      },
      duration: {
        type: Number,
        required: [true, 'Please provide a duration greater than 0.'],
      },
      distance: {
        type: Number,
        required: [true, 'Please provide a distance greater than 0.'],
      },
      weight: {
        type: Number,
        required: [true, 'Please enter a weight value for this exercise.'],
      },
      sets: {
        type: Number,
        required: [true, 'Please enter the number of sets performed.']
      },
      reps: {
        type: Number,
        required: [true, 'Please enter the number of reps were performed per set.']
      },
    },
  ],
});

// Compile Workout schema into model to create documents from
const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
