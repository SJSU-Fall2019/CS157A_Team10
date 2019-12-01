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

/* GET Project listing. */
router.get('/', function (req, res, next) {
  res.send('You are on project route');
});


/** GET Project Info */
router.get('/info', function (req, res) {

})

/** POST Request Get List of Projects base on course id */
/** Dashboard Page */
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


/** POST Request Delete Project */
/** ProjectList Page */
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
