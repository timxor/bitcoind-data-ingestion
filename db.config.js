'use strict';
const server = require('./index');
require('dotenv').config();

module.exports = {
  URL: process.env.DATABASE_URL,
  HOST: process.env.DATABASEHOST,
  USER: process.env.DATABASEUSER,
  PASSWORD: process.env.DATABASEPASSWORD,
  DB: process.env.DATABASE,
  ssl: process.env.DATABASE_URL ? true : false,
  dialect: 'postgres',
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
