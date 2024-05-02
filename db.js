require("dotenv").config();

const Pool = require("pg").Pool;

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: "free-postgresql-database.postgres.database.azure.com",
  port: 5432,
  database: "fishinapi",
  // listen_addresses: "*",
  ssl: { rejectUnauthorized: false },
};

const pool = new Pool(dbConfig);

module.exports = pool;
