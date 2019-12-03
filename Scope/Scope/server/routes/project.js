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



/** POST Request Add Project */
/** Create Project Page */
router.post('/add-project', function (req, res) {
  var project_name = req.body.project_name;
  var project_description = req.body.project_description;
  console.log(project_name)
  console.log(project_description)
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


/** POST Request Add Project */
/** Create Project Page */
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
