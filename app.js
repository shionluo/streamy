// Import
const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
// const enforce = require('express-sslify');

// ----------------------------------------------------------------------------------------- //

// Setup
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
// app.use(enforce.HTTPS({ trustProtoHeader: true }));

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

// Export
module.exports = app;
