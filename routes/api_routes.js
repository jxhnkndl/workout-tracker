// Import mongoose and models
const mongoose = require('mongoose');
const db = require('../models');

// Create and export API router
module.exports = (app) => {
  // GET: Get all workouts
  app.get('/api/workouts', async (req, res) => {
    try {
      const workouts = await db.Workout.find({});
      res.json(workouts);
    } catch {
      res.status(500).send('Error getting resource: ' + err);
    }
  });

  // PUT: Add exercises to workout
  app.put('/api/workouts/:id', async (req, res) => {
    const id = req.params.id;
    const exercise = req.body;

    try {
      const workout = await db.Workout.findOneAndUpdate(
        { _id: id },
        { $push: { exercises: exercise } },
        { new: true }
      );

      res.json(workout);
    } catch {
      res.status(500).send('Error updating resource: ' + err);
    }
  });
};
