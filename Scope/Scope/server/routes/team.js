var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const key = require('../key');
var jwt = require('jsonwebtoken');
var connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'CS157',
    password: 'ADMIN',
    database: 'Scope'
  }
)


/**
 * GET Team list and number of members in the project
 * Dashboard
 */
router.post('/project-team', function (req, res) {
  var project_id = req.headers.project_id;
  if (!project_id) {
    res.status(401).send("Missing Project ID")
  }

  // Update the SQL Table 
  // var sql = "SELECT team_name , team_number, teamProject_name, teamProject_description, COUNT(student_id) AS Team_Member FROM TEAM JOIN StudentHasTeams USING (project_id, team_number) JOIN Project USING (project_id) GROUP BY project_id, team_number, project_name HAVING project_id = ?"
  var sql = "SELECT team_name , team_number, teamProject_name, teamProject_description FROM TEAM WHERE project_id = ?"
  connection.query(sql, project_id, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

/**
 * GET Team Number from Student_id and project_id
 * Project
 */
router.post('/myProject', function (req, res) {
  var course_id = req.body.course_id;
  var token = req.headers.auth_token;
  if (!token) {
    res.status(401).send("Access Denied")
  }
  try {
    var student_id = jwt.decode(req.headers.auth_token, key)._id
  } catch (err) {
    throw err
  }
  if (!student_id) {
    res.status(401).send("Missing Project ID")
  }
  var varibale = [student_id, course_id]
  // Update the SQL Table 
  var sql = "SELECT * FROM CourseHasProjects JOIN StudentHasTeams USING (project_id) JOIN Team USING (project_id , team_number) WHERE student_id = ? AND course_id = ?;"
  connection.query(sql, varibale, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})


/**
 * GET Team Number from Student_id and project_id
 * Project
 */
router.post('/join', function (req, res) {
  var project_id = req.body.project_id;
  var team_number = req.body.team_number;
  var token = req.headers.auth_token;
  
  if (!token) {
    res.status(401).send("Access Denied")
  }
  try {
    var student_id = jwt.decode(req.headers.auth_token, key)._id
  } catch (err) {
    throw err
  }
  if (!student_id) {
    res.status(401).send("Missing Project ID")
  }
  var varibale = [project_id, team_number, student_id]
  // Update the SQL Table 
  var sql = "INSERT INTO StudentHasTeams (project_id, team_number, student_id) VALUES (?, ?, ?);"
  connection.query(sql, varibale, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

/**
 * GET Team Members info
 * Review
 */
router.post('/member', function (req, res) {
  var project_id = req.body.project_id;
  var team_number = req.body.team_number;
  if (!project_id || !team_number) {
    res.status(401).send("Missing Information")
  }
  var sql = "SELECT student_id, project_id, team_number, student_username, student_firstname, student_lastname, student_email FROM StudentHasTeams JOIN Student USING(student_id) WHERE project_Id=? AND team_number=? ; "
  var varibale = [project_id, team_number]
  connection.query(sql, varibale, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})


/**
 * Add one Team to the database Team Table
 * Review
 */
router.post('/add-team', function (req, res) {
  var project_id = req.body.project_id;
  var team_number = req.body.team_number;
  var team_name = req.body.team_name;
  var team_ProjectName = req.body.team_ProjectName;
  var team_ProjectDescription = req.body.team_ProjectDescription;

  if (!project_id || !team_number) {
    res.status(401).send("Missing Information")
  }
  var sql = "INSERT INTO Team (project_id, team_number, team_name, teamProject_name, teamProject_description) VALUES (?,?,?,?,?)"
  var varibale = [project_id, team_number, team_name, team_ProjectName, team_ProjectDescription];
  connection.query(sql, varibale, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})
module.exports = router;
