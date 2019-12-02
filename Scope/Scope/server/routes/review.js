var express = require('express');
var router = express.Router();
var mysql = require('mysql')
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

/**GET Review listing based on Project ID and Team number */
router.post('/info', function (req, res, next) {
  const project_id = req.body.project_id
  const student_id = jwt.decode(req.headers.auth_token, key)._id
  if (!project_id || !student_id) {
    return res.status(401).send("Project ID or Team Number is invalid")
  }
  var sql = 'SELECT course_name, student_firstname, student_lastname FROM CourseHasProjects JOIN Course USING(course_id), Student WHERE project_id = ? AND student_id = ?'
  var variable = [project_id, student_id]
  connection.query(sql, variable, function (err, result) {
    if (err) throw err
    res.send(result)
  })
});

/**GET Review listing based on Project ID and Team number */
router.post('/specific', function (req, res, next) {
  const project_id = req.body.project_id
  const team_number = req.body.team_number
  const reviewer_id = req.body.reviewer_id
  const reviewee_id = jwt.decode(req.headers.auth_token, key)._id
  const milestone_number = req.body.milestone_number
  if (!project_id || !student_id) {
    return res.status(401).send("Project ID or Team Number is invalid")
  }
  var sql = 'SELECT * FROM Reviews JOIN TeamHasReviews USING (review_id) WHERE project_id = ? AND team_number = ? AND reviewer =? AND reviewee =? AND milestone_number = ?;'
  var variable = [project_id, team_number, reviewer_id, reviewee_id, milestone_number]
  connection.query(sql, variable, function (err, result) {
    if (err) throw err
    res.send(result)
  })
});

/**GET Review listing based on Project ID and Team number */
router.post('/', function (req, res, next) {
  const project_id = req.body.project_id
  const team_number = req.body.team_number
  if (!project_id || !team_number) {
    return res.status(401).send("Project ID or Team Number is invalid")
  }
  var sql = 'SELECT * FROM Reviews JOIN TeamHasReviews USING (review_id) WHERE project_id =? AND team_number = ?;'
  var variable = [project_id, team_number]
  connection.query(sql, variable, function (err, result) {
    if (err) throw err
    res.send(result)
  })
});

/**GET Review listing based on Project ID and Team number */
router.post('/myReview', function (req, res, next) {
  const project_id = req.body.project_id
  const team_number = req.body.team_number
  const reviewee = jwt.decode(req.headers.auth_token, key)._id
  if (!project_id || !team_number) {
    return res.status(401).send("Project ID or Team Number is invalid")
  }
  var sql = 'SELECT * FROM Reviews JOIN TeamHasReviews USING (review_id) WHERE project_id =? AND team_number = ? AND reviewee = ?;'
  var variable = [project_id, team_number, reviewee]
  connection.query(sql, variable, function (err, result) {
    if (err) throw err
    res.send(result)
  })
});

/**GET Review listing based on Project ID and Team number */
router.post('/otherReview', function (req, res, next) {
  const project_id = req.body.project_id
  const team_number = req.body.team_number
  const reviewee = jwt.decode(req.headers.auth_token, key)._id
  if (!project_id || !team_number) {
    return res.status(401).send("Project ID or Team Number is invalid")
  }
  var sql = 'SELECT * FROM Reviews JOIN TeamHasReviews USING (review_id) WHERE project_id =? AND team_number = ?;'
  var variable = [project_id, team_number, reviewee]
  connection.query(sql, variable, function (err, result) {
    if (err) throw err
    res.send(result)
  })
});


/** Add a Review */
router.post('/add_review', function (req, res) {
  const reviewer = jwt.decode(req.headers.auth_token, key)._id
  const reviewee = req.body.reviewee
  const rating = req.body.rating
  const review_description = req.body.review_description
  if(!reviewer || !reviewee || !rating || !review_description)
  {
    return res.send("Missing Information")
  }
  var sql = 'INSERT INTO Reviews (reviewer, reviewee, rating, review_description) VALUES (? , ? , ? , ?);'
  var variable = [reviewer, reviewee, rating, review_description]
  connection.query(sql, variable, function (err, result) {
    if (err) throw err
    res.send(result)
  })
});

/** Update a Review */
router.post('/update_review', function (req, res) {
  const reviewer = jwt.decode(req.headers.auth_token, key)._id
  const reviewee = req.body.reviewee
  const rating = req.body.rating
  const review_description = req.body.review_description
  const milestone_number = req.body.milestone_number
  const review_id = req.body.review_id
  var sql = 'UPDATE Reviews SET milestone_number = ?, reviewer =?, reviewee =?, rating = ?, review_description=? WHERE review_id = ?'
  connection.query(sql, [milestone_number, reviewer, reviewee, rating, review_description, review_id], function (err, result) {
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
