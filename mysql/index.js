const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const db = require("./db");

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    process.exit(1);
  }
  console.log("MySQL connected");

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
