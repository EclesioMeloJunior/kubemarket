const environment = process.env.NODE_ENV;

const isDevelopment = environment === 'development';

const application = {
  port: process.env.PORT,
  serviceName: process.env.SERVICE_NAME,
};

const configurations = {
  environment,
  isDevelopment,
  ...application,
};

module.exports = configurations;
