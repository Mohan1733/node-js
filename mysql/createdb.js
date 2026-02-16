const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mohanraj",
});

db.connect((err) => {
  if (err) throw err;
  console.log("database connected");

  // create database
  db.query("create database if not exists testdb", (err) => {
    if (err) throw err;
    console.log("database testdb ensured");

    // switch to database
    db.changeUser({ database: "testdb" }, (err) => {
      if (err) throw err;
      // create table
      const tableQuery = `create table if not exists users(
        id int auto_increment primary key,
        name varchar(100),
        email varchar(100))`;

      db.query(tableQuery, (err) => {
        if (err) throw err;
        console.log("table ensured");
        db.end();
      });
    });
  });
});
