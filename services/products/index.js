const logger = require('./src/lib/logger');
const server = require('./src/server');
const Database = require('./src/infra/database');

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

Database.connect().then(startServer);
