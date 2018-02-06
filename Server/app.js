
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
const mysql = require('mysql');
// var serverInfo =require('./serverinfo.json');
// var dbInfo =require('./database.json');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extented: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type,Accept");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Method", "GET", "POST", "OPTION", "PUT", "DELETE");
  next();
});

app.post('/loginPortal', function (req, res, next) {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ncr'
  });

  // console.log(req.body);
  console.log('password is:::\n');
  let form_password=req.body.password;
  let form_qlid=req.body.qlid;
  console.log("qlid :- "+form_qlid);
  console.log("password :- "+form_password);
  con.connect((err) => {
    if (err) {
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });

  con.query("SELECT * FROM user_detail where qlid='"+form_qlid+"'", (err, rows) => {
    if (err) throw err;
    var pp = '';
    pp = rows[0].password;

     console.log('Data received from Db:\n');
    console.log(pp);
    if (pp == form_password) {
      console.log("matched");
    }else{
      console.log("paswword did'nt matched.");
    }
  });

  con.end((err) => {
    console.log(' The connection is terminated gracefully');
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
  });

});

app.listen(7200, function () {
  console.log("magic Happens on port 7200");
});