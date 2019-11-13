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

/**GET Review listing based on Project ID and Team number */
router.post('/', function (req, res, next) {
  const project_id = req.body.project_id
  const team_number = req.body.team_number
  if (!project_id || !team_number) {
    res.status(401).send("Project ID or Team Number is invalid")
  }
  var sql = 'SELECT * FROM Reviews JOIN TeamHasReviews USING (review_id) WHERE project_id =? AND team_number = ?;'
  var variable = [project_id, team_number]
  connection.query(sql, variable, function (err, result) {
    if (err) throw err
    res.send(result)
  })
});

/** Add a Review */
router.post('/add_review', function (req, res) {
  const reviewer = req.body.reviewer
  const reviewee = req.body.reviewee
  const rating = req.body.rating
  const review_description = req.body.review_description
  var sql = 'INSERT INTO Reviews (reviewer, reviewee, rating, review_description) VALUES (? , ? , ? , ?);'
  var variable = [reviewer, reviewee, rating, review_description]
  connection.query(sql, variable, function (err, result) {
    if (err) throw err
    res.send(result)
  })
});

router.post('/add_teamHasReview', function (req, res) {
  const project_id = req.body.project_id
  const team_number = req.body.team_number
  const review_id = req.body.review_id
  if (!project_id || !team_number) {
    res.status(401).send("Project ID or Team Number is invalid")
  }
  var sql = 'INSERT INTO TeamHasReviews (project_id, team_number, review_id) VALUES (? , ? , ?);'
  var variable = [project_id, team_number, review_id]
  connection.query(sql, variable, function (err, result) {
    if (err) throw err
    res.send(result)
  })

})



module.exports = router;
