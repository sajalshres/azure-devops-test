const { port, env } = require('./config/variables');
const logger = require('./config/logger');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port, () =>
  logger.info(`Frontend Web Server started on port ${port} (${env})`)
);

module.exports = app;
