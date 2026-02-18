const db = require("../db");

// get all users
exports.getAllUsers = (req, res) => {
  db.query("select * from users", (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
};

// get single user
exports.getUserById = (req, res) => {
  db.query(
    "select * from users where id= ?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.length === 0) {
        return res.status(404).json({ message: "user not found" });
      }
      res.status(200).send(result[0]);
    },
  );
};

// create user
exports.getCreateUser = (req, res) => {
  const {name, email} = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and Email are required" });
  }
  db.query(
    "insert into users (name,email) values (?,?)",
    [name, email],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ id: result.insertId, name, email });
    },
  );
};
