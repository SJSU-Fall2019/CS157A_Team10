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

/* GET Team listing by Project ID */
router.post('/', function (req, res, next) {
  const project_id = req.body.project_id

  // If Project_id is undefined
  if (!project_id) {
    res.status(401).send("Invalid Project ID")
  }

  // Query team data based on the project_id
  var sql = 'SELECT * FROM  Team WHERE project_id = ?'
  connection.query(sql, project_id, function (err, result) {
    if (err) throw err
    res.send(result);
  })
});

/** GET Team member listing by Project ID and Team ID */
router.post('/team_member', function (req, res) {
  const project_id = req.body.project_id
  const team_number = req.body.team_number
  // Query team members info
  var sql = 'SELECT student_id, student_username, student_firstname, student_lastname, student_email FROM Student JOIN StudentHasTeams USING (student_id) WHERE project_id =? AND team_number = ?;'
  var variable = [project_id, team_number]
  connection.query(sql, variable, function (err, result) {
    if (err) throw err
    res.send(result);
  })
})

module.exports = router;
