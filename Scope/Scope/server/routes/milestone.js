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
/* GET Milestone listing. */
router.get('/', function (req, res, next) {
  res.send('You are on milestone route');
});


/**GET List of Milestone, project name, course name from the given project id */
router.post('/', function (req, res) {
  const project_id = req.body.project_id
  if (!project_id) {
    res.status(401).send("Missing Project ID")
  }
  const sql = "SELECT project_name, project_description,course_name, milestone_number, milestone_title, milestone_description FROM Milestones JOIN ProjectHasMilestones USING (milestone_number) JOIN project USING (project_id) JOIN CourseHasProjects USING(project_id) JOIN Course USING(course_id) WHERE project_id = ?"
  connection.query(sql, project_id, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})
module.exports = router;
