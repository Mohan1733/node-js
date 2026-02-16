const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mohanraj",
  database: "testdb",
});

module.exports = db;
