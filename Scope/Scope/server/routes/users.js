var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var auth = require('../function/authorization')
var jwt  = require('jsonwebtoken')
const key = require('../key');
var connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'CS157',
    password: 'ADMIN',
    database: 'Scope'
  }
)

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('You are on users route');
});


/**
 * Handles User Login request
 */
router.post('/login', function (req, res) {
  var sql = 'SELECT * FROM User WHERE user_email = ?';
  var username = req.body.username;

  // Missing username in the body
  if(!username)
  {
    res.status(401).send("Access Denied")
  }

  console.log(username)
  connection.query(sql, username, function (err, result) {
    if (err) throw err
    // Check if user exists in our database
    if (result[0].user_password = undefined) {
      res.status(401).send("User does not exist")
    }
    // User password matching
    if (result[0].user_password = req.body.password) {

      // Log In success ; Create and Assign JWT token
      const token = jwt.sign({ _id: result[0].user_id }, key.key);
      res.header('auth_token', token).send(token)
    }
  })
});

module.exports = router;
