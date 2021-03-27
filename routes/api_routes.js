// Import models
const db = require('../models');

// Create and export API router
module.exports = (app) => {

  // GET: Get workouts
  app.get('/api/workouts', async (req, res) => {
    try {
      const data = await db.Workout.find({});
      res.json(data);
    } catch {
      res.status(500).json({ success: false });
    }
  });

  // POST: Create new workout
  app.post('/api/workouts', async (req, res) => {
    console.log(req.body);

    try {
      const data = await db.Workout.insert(req.body);
      console.log(data);
    } catch {
      res.status(500).json({ success: false })
    }
  });
};
