// Import path module
const path = require('path');

// Create and export HTML router
module.exports = (app) => {
  // Index route
  app.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../public/index.html'));
  }); 

  // Exercse route
  app.get('/exercise', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  });

  // Stats dashboard route
  app.get('/stats', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });
}