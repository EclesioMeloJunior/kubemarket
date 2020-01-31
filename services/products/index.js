const logger = require('./src/lib/logger');
const server = require('./src/server');
const databaseConnect = require('./src/infra/database').connect;

const {
  application,
} = require('./src/config');

const serviceName = application.serviceName.toUpperCase();
const appPort = application.port;


// eslint-disable-next-line require-jsdoc
function startServer() {
  server.listen(appPort, () => {
    logger.info(`Service ${serviceName} started at ${appPort}`);
  });
}

databaseConnect().then(startServer);
