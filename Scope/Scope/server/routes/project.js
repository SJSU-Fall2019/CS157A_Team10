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
 * {GET} Default project route
 * @return {String} An message that indicates user is on project route
 */
router.get('/', function (req, res, next) {
  res.send('You are on project route');
});


/**
 * {POST} Get project information
 * @param {string} project_id The id of the project
 * @return {MySQL result} All information of the specific project in the Scope database
 */
router.post('/info', function (req, res) {
  var project_id = req.body.project_id
  if (!project_id) {
    return res.status(401).send("Missing information")
  }
  var sql = "SELECT * FROM Project WHERE project_id = ?"
  connection.query(sql, project_id, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

/**
 * {POST} Get all project information from one course1
 * @param {string} course_id The id of the course
 * @return {MySQL result} A collection of the project in the course; each contains the id of the project, project name and project description
 */
router.post('/course-project', function (req, res) {
  var course_id = req.headers.course_id;
  if (!course_id) {
    res.status(401).send("Missing course_name")
  }
  var sql = "SELECT project_id , project_description, project_name FROM CourseHasProjects JOIN Course USING (course_id) JOIN Project USING (project_id) WHERE course_id = ? "
  connection.query(sql, course_id, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})



/**
 * {POST} Add project to the Scope atabase
 * @param {string} project_name The name of the project
 * @param {string} project_description The description of the project
 * @return {MySQL result} MySQL successful / unsuccessful insertion message
 */
router.post('/add-project', function (req, res) {
  var project_name = req.body.project_name;
  var project_description = req.body.project_description;
  if (!project_name || !project_description) {
    return res.status(401).send("Missing Information")
  }
  var sql = "INSERT INTO Project (project_name, project_description) VALUES (?, ?)"
  var projectTable = [project_name, project_description]
  connection.query(sql, projectTable, function (err, result) {
    if (err) {
      print(err)
    }
    res.send(result)
  })
})


/**
 * {POST} Insert a new instsance into ProjectHasMilestones table
 * @param {string} project_id The id of the project
 * @param {string} milestone_number The id of milestone that a project contains
 * @return {MySQL result} MySQL successful / unsuccessful insertion message
 */
router.post('/updateProjectHasMilestones', function (req, res) {
  var project_id = req.body.project_id;
  var milestone_number = req.body.milestone_number;
  if (!project_id || !milestone_number) {
    return res.status(401).send("Missing Information")
  }
  var sql = "INSERT INTO ProjectHasMilestones (project_id, milestone_number) VALUES (?, ?)"
  connection.query(sql, [project_id, milestone_number], function (err, result) {
    if (err) {
      print(err)
    }
    res.send(result)
  })

})


/**
 * {POST} Delete a project in the Scope Database
 * @param {string} project_id The id of the project
 * @return {MySQL result} MySQL successful / unsuccessful insertion message
 */
router.post('/delete', function (req, res) {
  var project_id = req.headers.project_id;
  if (!project_id) {
    res.status(401).send("Missing project_id")
  }
  var sql = "DELETE FROM Project WHERE project_id = ?;"
  connection.query(sql, project_id, function (err, result) {
    if (err) throw err
  })
  sql = "DELETE FROM CourseHasProjects WHERE project_id = ?"
  connection.query(sql, project_id, function (err, result) {
    if (err) throw err
  })
  sql = "DELETE FROM ProjectHasMilestones WHERE project_id = ?"
  connection.query(sql, project_id, function (err, result) {
    if (err) throw err
  })
  sql = "DELETE FROM StudentHasProjects WHERE project_id = ?"
  connection.query(sql, project_id, function (err, result) {
    if (err) throw err
  })
  sql = "DELETE FROM Team WHERE project_id = ?"
  connection.query(sql, project_id, function (err, result) {
    if (err) throw err
  })
  sql = "DELETE FROM TeamHasReviews WHERE project_id = ?"
  connection.query(sql, project_id, function (err, result) {
    if (err) throw err
    res.send(result)
  })

})
module.exports = router;
