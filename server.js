// Import
const express = require('express');
const cors = require('cors');
const path = require('path');
const enforce = require('express-sslify');
const compression = require('compression');

// Setup
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(compression());

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

// Start
app.listen(port, error => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});
