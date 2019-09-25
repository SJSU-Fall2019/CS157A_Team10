var express = require('express');
var mysql   = require('mysql');
var app = express();
var router = express.Router();
var mysql = require('mysql')

app.get('/users', function (req, res) {
  res.json([
    {id:1, username: "Somebody"},
    {id:2, username: "Somebody_else"},
  ]);
})

app.get('/', function (req, res) {
    res.send("Hello World")
})


app.get('/mysql', function (req, res)
{
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'cs157a',
    password: 'cs157a',
    database: 'cs157a'
  })

  connection.connect()

  connection.query('SELECT * FROM emp', function (err, result, fields) {
    if (err) throw err

    res.send(result)
  })

  connection.end()
})



var server = app.listen(8010, function () {
   var host = server.address().address
   var port = server.address().port
})



module.exports = router;
