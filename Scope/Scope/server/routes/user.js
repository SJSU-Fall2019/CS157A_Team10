var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var auth = require('../function/authorization')
var jwt = require('jsonwebtoken')
const key = require('../key');

var connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'CS157',
    password: 'ADMIN',
    database: 'Scope'
  }
)

function verify(req, res) {
  var token = req.headers.auth_token;
  if (!token) {
    return res.status(401).send("Access Denied")
  }
  try {
    var user_id = jwt.decode(req.headers.auth_token, key.key)._id
  }
  catch (err) {
    throw err
  }
  // No Token or Token is not valid
  if (!user_id) {
    return res.status(404).send('User not verified or do not have access')
  }
}

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('You are on users route');
});


/**
 * Handles User sign up
 */

router.post('/signup', function (req, res) {

})


/**
 * Fetch Project By user id
 */
router.post('/project', function (req, res) {
  var token = req.headers.auth_token;
  if (!token) {
    res.status(401).send("Access Denied")
  }
  try {
    var user_id = jwt.decode(req.headers.auth_token, key.key)._id
  }
  catch (err) {
    throw err
  }
  // No Token or Token is not valid
  if (!user_id) {
    res.status(404).send('User not verified or do not have access')
  }
  // Query Project data based on the user_id
  var sql = 'SELECT * FROM Project WHERE project_id IN (SELECT project_id from StudentHasProjects WHERE student_id =?)'
  connection.query(sql, user_id, function (err, result) {
    if (err) throw err

    // Parse Date to "yyyy/mm/dd" format
    // result.forEach(element => {
    //   element.project_startDate = element.project_startDate.toISOString().slice(0, 10)
    //   element.project_endDate = element.project_endDate.toISOString().slice(0, 10)
    // });
    res.send(result);
  })

});


/**
 * Fetch Student List
 */

router.post('/all', function (req, res) {
  verify(req, res)
  // Query all User info 
  var sql = 'SELECT student_firstname, student_lastname, student_email FROM Student'
  connection.query(sql, function (err, result) {
    if (err) throw err
    res.send(result);
  })
})


//************************************ Student *********************************************/

/**
 * GET Student name by auth_token
 */
router.post('/student_info', function (req, res) {
  var token = req.headers.auth_token;
  if (!token) {
    res.status(401).send("Access Denied")
  }
  try {
    var student_id = jwt.decode(req.headers.auth_token, key)._id
  } catch (err) {
    throw err
  }
  var sql = "SELECT student_firstname, student_lastname FROM Student WHERE student_id =  ?"
  connection.query(sql, student_id, function (err, result) {
    if (err) throw err
    res.send(result)
  })
});


/**
 * Handles Student Login request
 */
router.post('/student_login', function (req, res) {
  var sql = 'SELECT student_password, student_id FROM Student WHERE student_email= ?';
  var username = req.body.username
  connection.query(sql, username, function (err, result) {
    if (err) throw err
    // Check if user exists in our database
    if (result[0].student_password = undefined) {
      res.status(401).send("User does not exist")
    }
    // User password matching
    if (result.student_password = req.body.password) {
      // Log In success ; Create and Assign JWT token
      const token = jwt.sign({ _id: result[0].student_id }, key.key);
      //other headers here
      res.json({
        auth_token: token
      })
    }
    else (
      res.status(401).send("Access Denied")
    )
  })
});


//************************************ Instrucotor *********************************************/


/**
 * Handles Instructor Login request
 */
router.post('/instructor_login', function (req, res) {
  var sql = 'SELECT inst_password, instructor_id FROM Instructor WHERE inst_email= ?';
  var username = req.body.username
  connection.query(sql, username, function (err, result) {
    if (err) throw err
    // Check if user exists in our database
    if (result[0].inst_password = undefined) {
      res.status(401).send("User does not exist")
    }
    // User password matching
    if (result.inst_password = req.body.password) {
      // Log In success ; Create and Assign JWT token
      const token = jwt.sign({ _id: result[0].instructor_id }, key.key);
      //other headers here
      res.json({
        auth_token: token
      })
    }
    else (
      res.status(401).send("Access Denied")
    )
  })
});


module.exports = router;
