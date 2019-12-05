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
 * {GET} Default milestone route
 * @return {String} An message that indicates user is on milestone route
 */
router.get('/', function (req, res, next) {
  res.send('You are on milestone route');
});


/**
 * {Post} Get project and project's milestones information 
 * @param {string} project_id The id of the project
 * @return {MySQL result} A collection of object; each contains the name of the projeect, project description, course name
 * mielstone number, milestone title and milestone description
 */
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

/**
 * {Post} Insert a milestone in database 
 * @param {string} milestone_title The title of the milestone
 * @param {string} milestone_description The description of the milestone
 * @return {MySQL result} MySQL successful / unsuccessful insertion message
 */
router.post('/create', function (req, res) {
  const milestone_title = req.body.milestone_title
  const milestone_description = req.body.milestone_description
  if (!milestone_title || !milestone_description) {
    res.status(401).send("Missing Information")
  }
  const sql = "INSERT INTO Milestones (milestone_title, milestone_description) VALUES (?, ?)"
  connection.query(sql, [milestone_title, milestone_description], function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

module.exports = router;
