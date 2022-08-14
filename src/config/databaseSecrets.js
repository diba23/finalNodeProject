module.exports = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_MAIN_DB,
  password: process.env.DATABASE_PASSWORD,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
};
