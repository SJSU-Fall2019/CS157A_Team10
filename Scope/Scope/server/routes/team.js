var express = require('express');
var router = express.Router();
var mysql = require('mysql')
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
  var sql = "SELECT team_name , team_number, teamProject_name, teamProject_description, COUNT(student_id) AS Team_Member FROM TEAM JOIN StudentHasTeams USING (project_id, team_number) JOIN Project USING (project_id) GROUP BY project_id, team_number, project_name HAVING project_id = ?"
  connection.query(sql, project_id, function (err, result) {
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

module.exports = router;
