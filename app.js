// Import
const express = require('express');
const cors = require('cors');
const enforce = require('express-sslify');
const compression = require('compression');

// Setup
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(compression());

// Export
module.exports = {
  express,
  app,
};
