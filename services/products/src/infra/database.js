const {
  database,
} = require('../config');
const logger = require('../lib/logger');
const MongoClient = require('mongodb').MongoClient;

let connection = null;

/**
 * buildMongoDBDriver Builds and mongodb connection
 * @param {object} database.ConnectionOptions
 * @return {object} MongoClient
 */
async function connect() {
  const mongoDBhost = encodeURIComponent(database.host);
  const mongoDBport = encodeURIComponent(database.port);
  const mongoDBdatabase = database.database;
  const mongoDBuser = encodeURIComponent(database.user);
  const mongoDBpassword = encodeURIComponent(database.password);
  const mongoDBauthMechanism = 'DEFAULT';

  const url = `mongodb://${mongoDBuser}:${mongoDBpassword}@${mongoDBhost}:${mongoDBport}/${mongoDBdatabase}?authMechanism=${mongoDBauthMechanism}`;

  const client = new MongoClient(url);

  try {
    if (!connection) {
      const openConnection = await client.connect();

      connection = {
        db: openConnection.db(mongoDBdatabase),
        close: openConnection.close,
      };
    }
  } catch (exception) {
    logger.error('DATABASE_CONNECTION_ERROR', {
      connectionString: url,
      exception,
    });
  }

  return {
    close: client.close,
  };
}

module.exports = {
  connection,
  connect,
};
