const databases = {
  host: process.env.MONGODB_HOST,
  port: process.env.MONGODB_PORT,
  database: process.env.MONGODB_DATABASE,
  user: process.env.MONGODB_USER,
  password: process.env.MONGODB_PASSWORD,
};

module.exports = databases;
