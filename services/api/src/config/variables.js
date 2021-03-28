const path = require('path');

require('dotenv-safe').config({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  logDir: process.env.LOG_DIR,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
