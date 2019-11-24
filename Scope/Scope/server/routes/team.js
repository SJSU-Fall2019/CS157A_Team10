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
  var sql = "SELECT team_name , COUNT(student_id) AS Team_Member FROM TEAM JOIN StudentHasTeams USING (project_id, team_number) JOIN Project USING (project_id) GROUP BY project_id, team_number, project_name HAVING project_id = ?"
  connection.query(sql, project_id, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

module.exports = router;
