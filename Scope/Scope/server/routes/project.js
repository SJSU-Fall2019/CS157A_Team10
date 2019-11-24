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

/** POST Request Get List of Projects base on course name */
/** Dashboard Page */
router.post('/course-project', function (req, res) {
  var course_id = req.headers.course_id;
  if (!course_id) {
    res.status(401).send("Missing course_name")
  }
  var sql = "SELECT project_id , project_name FROM CourseHasProjects JOIN Course USING (course_id) JOIN Project USING (project_id) WHERE course_id = ? "
  connection.query(sql, course_id, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

/** POST Request Delete Project */
/** ProjectList Page */
router.post('/delete', function (req, res) {
  var project_id = req.body.project_id;
  if (!project_id) {
    res.status(401).send("Missing project_id")
  }
  var sql = ""

})
module.exports = router;
