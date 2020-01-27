const {
  createLogger,
  format,
  transports,
} = require('winston');

const logger = createLogger({
  format: format.combine(format.timestamp(), format.prettyPrint()),
  transports: [new transports.Console()],
});

const logType = type => (message, meta = {}) => logger[type](message, meta);

module.exports = {
  info: logType('info'),
  warn: logType('warn'),
  error: logType('error'),
};
