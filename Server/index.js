const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aaryan@1008",
  database: "online_food_delivery_system",
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "select * from customers";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/employee", (req, res) => {
  const sqlSelect = "select * from employees";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/employee/supervisor", (req, res) => {
  const sqlSelect = "select * from supervisors";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/employee/driver", (req, res) => {
  const sqlSelect = "select * from drivers";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/res", (req, res) => {
  const sqlSelect = "select * from menuitems";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const Id = req.body.Id;
  const Name = req.body.Name;
  const Phone = req.body.Phone;
  const Address = req.body.Address;
  const Region = req.body.Region;

  const sqlInsert = "insert into customers VALUES (?,?,?,?,?)";

  db.query(sqlInsert, [Id, Name, Phone, Address, Region], (err, result) => {
    console.log(err);
  });
});

app.post("/api/employee/insert", (req, res) => {
  const Id = req.body.Id;
  const Name = req.body.Name;
  const Phone = req.body.Phone;
  const Hours = req.body.Hours;
  const Region = req.body.Region;

  const sqlInsert = "insert into employees VALUES (?,?,?,?,?)";

  db.query(sqlInsert, [Id, Name, Region, Phone, Hours], (err, result) => {
    console.log(err);
  });
});

app.delete("/api/customer/delete/:Name", (req, res) => {
  const Name = req.params.Name;

  const sqlInsert = "delete from customers where cName=?";

  db.query(sqlInsert, Name, (err, result) => {
    console.log(err);
  });
});

app.delete("/api/employee/delete/:Name", (req, res) => {
  const Name = req.params.Name;
  const sqlInsert = "delete from employees where empName=?";

  db.query(sqlInsert, Name, (err, result) => {
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
