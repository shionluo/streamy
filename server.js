// Import
const { express, app } = require('./app');
const path = require('path');

// Setup
const port = process.env.PORT || 4000;

// Production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Service Worker
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

// Serving
app.listen(port, error => {
  if (error) throw error;
  console.log(`Listening on port: ${port}`);
});
