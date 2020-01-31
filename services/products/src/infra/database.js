const {
  database,
} = require('../config');
const logger = require('../lib/logger');
const MongoClient = require('mongodb').MongoClient;


/**
 * buildMongoDBDriver Builds and mongodb connection
 * @param {object} database.ConnectionOptions
 * @return {object} MongoClient
 */
class Database {
  /**
   * Database constructor
   */
  constructor() {
    this.connection = null;
  }

  /**
   * Estabilish the database connection
   */
  async connect() {
    const mongoDBhost = encodeURIComponent(database.host);
    const mongoDBport = encodeURIComponent(database.port);
    const mongoDBdatabase = database.database;
    const mongoDBuser = encodeURIComponent(database.user);
    const mongoDBpassword = encodeURIComponent(database.password);
    const mongoDBauthMechanism = 'DEFAULT';

    const url = `mongodb://${mongoDBuser}:${mongoDBpassword}@${mongoDBhost}:${mongoDBport}/${mongoDBdatabase}?authMechanism=${mongoDBauthMechanism}`;

    const client = new MongoClient(url);

    try {
      if (!this.connection) {
        const openConnection = await client.connect();

        this.connection = {
          db: openConnection.db(mongoDBdatabase),
          close: openConnection.close,
        };

        logger.info('DATABASE_CONNECTION_OPEN');
      }
    } catch (exception) {
      logger.error('DATABASE_CONNECTION_ERROR', {
        connectionString: url,
        exception,
      });
    }
  }
}

module.exports = new Database();
