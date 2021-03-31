// Import mongoose and models
const mongoose = require('mongoose');
const { Workout } = require('../models');
const db = require('../models');

// Create and export API router
module.exports = (app) => {
  // GET: Get all workouts
  app.get('/api/workouts', async (req, res) => {
    try {
      const workouts = await db.Workout.aggregate([{
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration"
          }
        }
      }]);

      res.json(workouts);
    } catch {
      res.status(500).json({ success: false });
    }
  });

  // GET: Range of workouts
  app.get('/api/workouts/range', async (req, res) => {
    const today = new Date();
    const sevenDaysAgo = new Date(
      new Date(new Date().setDate(new Date().getDate() - 6))
    );

    try {
      const workouts = await db.Workout.aggregate([
        { $match: { day: { $lte: today, $gte: sevenDaysAgo }}},    
        { $addFields: { totalDuration: { $sum: "$exercises.duration"}}}
      ]);

      res.json(workouts);
    } catch {
      res.status(500).json({ success: false });
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
      res.status(500).json({ success: false });
    }
  });

  // POST: Create new workout document to add exercises to
  app.post('/api/workouts', async (req, res) => {
    try {
      const workout = db.Workout.create(req.body);
      res.json(workout);
    } catch {
      res.status(500).json({ success: false });
    }
  });
};
