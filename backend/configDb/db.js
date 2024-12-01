const mysql = require('mysql2')
require('dotenv').config()

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_DATABASE
}).promise()

pool.getConnection((err) => {
  if (err) {
    console.error('Failed to connect to the database:', err.message);
    throw err;
  }
  console.log('Connected to MySQL database!');
});

module.exports = pool