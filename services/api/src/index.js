const { port, env } = require('./config/variables');
const logger = require('./config/logger');
const app = require('./config/app');

app.listen(port, () => logger.info(`API Web Server started on port ${port} (${env})`));

module.exports = app;
