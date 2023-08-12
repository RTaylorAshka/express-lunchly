/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client({ database: 'lunchly', user: 'postgres', password: 'secretPassword' });

db.connect();

module.exports = db;
