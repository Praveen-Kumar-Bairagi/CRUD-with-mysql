const db = require("../database/db");

// Create Database;
exports.getDatabase = async (req, res) => {
  let sql = "CREATE DATABASE DemoCrud1";
  db.query(sql, (er, data) => {
    if (er) {
      console.log("database exist already");
    }
    // console.log(data);
    res.send("database created");
  });
};

//Create Tables;
exports.getTables = async (req, res) => {
  let sql =
    "CREATE TABLE Users(id int AUTO_INCREMENT,name VARCHAR(255),email VARCHAR(255),password VARCHAR(255),PRIMARY KEY (id))";
  db.query(sql, (er, data) => {
    if (er) {
      // console.log('table exist already');
      res.send("Table exists already");
    }
    // console.log('Table created');
    res.send("Table created");
  });
};

//show data of database;
exports.getUsers = async (req, res) => {
  let sql = "SELECT * FROM Users";
  db.query(sql, (er, data) => {
    if (er) {
      console.log(er);
      res.json({ message: er });
    }
    console.log(data);
    res.json({ data: data });
  });
};

//insert data into database
exports.insertUser = async (req, res) => {
  let sql = "INSERT INTO Users SET?";
  user1 = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  db.query(sql, user1, (er, data) => {
    if (er) {
      console.log(er);
      res.json({ message: er });
    }
    console.log(data);
    res.json({ data: "user created successfully!" });
  });
};

//Update data
exports.updateUsers = async (req, res) => {
  let sql = `UPDATE Users SET name='${req.body.name}', email='${req.body.email}' , password='${req.body.password}' Where id = ${req.params.id}`;
  db.query(sql, (er, data) => {
    if (er) {
      console.log(er);
      res.json({ message: er });
    }
    console.log(data);
    res.json({ data: "user updated successfully!" });
  });
};

//delete data
exports.deleteUsers = async (req, res) => {
  let sql = `DELETE FROM Users WHERE name ='${req.body.name}'`;
  db.query(sql, (er, data) => {
    if (er) {
      console.log(er);
      res.json({ message: er });
    }
    console.log(data);
    POST;
    res.json({ data: "user deleted successfully" });
  });
};

exports.deleteUsersbyId = async (req, res) => {
  let sql = `DELETE FROM Users WHERE id='${req.params.id}'`;
  db.query(sql, (er, data) => {
    if (er) {
      console.log(er);
      res.json({ message: er });
    }
    console.log(data);
    res.json({ data: "user deleted successfully" });
  });
};
