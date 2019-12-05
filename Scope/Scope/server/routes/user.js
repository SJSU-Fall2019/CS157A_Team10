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

/**
 * Verify User's token
 * @param {string} auth_token The User'session key 
 * @return Success if the token is valid or Access Denied
 */
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

/**
 * {GET} Default User route
 * @return {String} An message that indicates user is on User route
 **/
router.get('/', function (req, res, next) {
  res.send('You are on users route');
});


/**
 * {Post} Get all student user information in our database
 * @return {MySQL result} A list of student information each contains student's firstname,
 * student's lastname and student's email
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


/**
 * {Post} Get a student's information
 * @param {string} auth_token The session key from the User
 * @return {MySQL result} Student's information contains Student's id, student's firstname
 * and student's lastname
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
  var sql = "SELECT student_id , student_firstname, student_lastname FROM Student WHERE student_id =  ?"
  connection.query(sql, student_id, function (err, result) {
    if (err) throw err
    res.send(result)
  })
});


/**
 * {Post} Add a relationship between student and project
 * @param {string} project_id The id of the project
 * @param {string} auth_token The session key from User to identity User's id
 * @return {MySQL result} MySQL successful / unsuccessful insertion message
 */
router.post('/updateStudentHasProjects', function (req, res) {
  var token = req.headers.auth_token;
  if (!token) {
    res.status(401).send("Access Denied")
  }
  try {
    var student_id = jwt.decode(req.headers.auth_token, key)._id
  } catch (err) {
    throw err
  }
  const project_id = req.body.project_id;
  var sql = 'INSERT INTO StudentHasProjects (student_id, project_id) VALUES (?, ?)'
  var variable = [student_id, project_id]
  connection.query(sql, variable, function (err, result) {
    if (err) throw err
    res.send(result);
  })
})


/**
 * {Post} Handles Student Sign in
 * @param {string} username The username of the student account
 * @param {string} password The password of the student account
 * @return {MySQL result} A JWT token if login success else a error message
 */
router.post('/student_login', function (req, res) {
  var sql = 'SELECT student_password, student_id FROM Student WHERE student_email= ?';
  var username = req.body.username
  connection.query(sql, username, function (err, result) {
    if (err) throw err
    // Check if user exists in our database
    if (result[0].student_password = undefined) {
      return res.status(401).send("User does not exist")
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

/**
 * {Post} Handles Student Sign Up
 * @param {string} username The username of the student account
 * @param {string} first_name The first name of the student
 * @param {string} last_name The last name of the student
 * @param {string} password The password of the student account
 * @return {MySQL result} MySQL successful / unsuccessful update message
 */
router.post('/student_signup', function (req, res) {
  var username = req.body.username
  var first_name = req.body.first_name
  var last_name = req.body.last_name
  var password = req.body.password
  var user_id = Math.floor(Math.random() * 100000000);
  if (!username || !first_name || !last_name || !password) {
    return res.status(401).send("Missing Sign Up information")
  }
  var sql = 'INSERT INTO Student VALUES (?, ?, ?, ? , ? ,? )';
  var variables = [user_id, username, password, first_name, last_name, username];
  connection.query(sql, variables, function (err, result) {
    if (err) throw err
    res.send("Register Successful")
  });
});




/**
 * {Post} Handles Instructor Sign in
 * @param {string} username The username of the instructor account
 * @param {string} password The password of the instructor account
 * @return {MySQL result} A JWT token if login success else a error message
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

/**
 * {Post} Get a instructor's information
 * @param {string} auth_token The session key from the User
 * @return {MySQL result} Instructor's information contains instructor's id, instructor's firstname
 * and instructor's lastname
 */
router.post('/instructor_info', function (req, res) {
  var token = req.headers.auth_token;
  if (!token) {
    res.status(401).send("Access Denied")
  }
  try {
    var instructor_id = jwt.decode(req.headers.auth_token, key)._id
  } catch (err) {
    throw err
  }
  var sql = "SELECT inst_first_name, inst_last_name FROM Instructor WHERE instructor_id =  ?"
  connection.query(sql, instructor_id, function (err, result) {
    if (err) throw err
    res.send(result);
  })
});


/**
 * {Post} Handles Instructor Sign Up
 * @param {string} username The username of the instructor account
 * @param {string} first_name The first name of the instructor
 * @param {string} last_name The last name of the instructor
 * @param {string} password The password of the instructor account
 * @return {MySQL result} MySQL successful / unsuccessful update message
 */
router.post('/instructor_signup', function (req, res) {
  var username = req.body.username
  var first_name = req.body.first_name
  var last_name = req.body.last_name
  var password = req.body.password
  var user_id = Math.floor(Math.random() * 1000000000);
  if (!username || !first_name || !last_name || !password) {
    return res.status(401).send("Missing Sign Up information")
  }

  var sql = 'INSERT INTO Instructor VALUES (?, ?, ?, ? , ? ,? )';
  var variables = [user_id, username, password, first_name, last_name, username];
  connection.query(sql, variables, function (err, result) {
    if (err) throw err
    res.send("Register Success")
  });
});


module.exports = router;
