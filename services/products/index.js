const logger = require('./src/lib/logger');
const server = require('./src/server');
const {
  application,
} = require('./src/config');

const serviceName = application.serviceName.toUpperCase();
const appPort = application.port;

server.listen(appPort, () => {
  logger.info(`Service ${serviceName} started at ${appPort}`);
});
