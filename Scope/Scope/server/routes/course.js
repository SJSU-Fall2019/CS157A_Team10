var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var auth = require('../function/authorization')
var jwt = require('jsonwebtoken')
const key = require('../key');

// MySQL Connetion
var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'CS157',
        password: 'ADMIN',
        database: 'Scope'
    })

/************************************ Instructor ******************************/

/* GET list of courses by instructor id */
router.post('/instructor', function (req, res) {
    var token = req.headers.auth_token;
    if (!token) {
        res.status(401).send("Access Denied")
    }
    try {
        var instructor_id = jwt.decode(req.headers.auth_token, key)._id
    } catch (err) {
        throw err
    }
    // Query a list of course teach by instructor
    var sql = 'SELECT course_id, course_name FROM Instructor JOIN InstructorTeachCourses USING (instructor_id) JOIN Course USING (course_id) WHERE instructor_id = ?'
    connection.query(sql, instructor_id, function (err, result) {
        if (err) throw err
        res.send(result);
    })
});



/************************************ Student *********************************/


/* GET list of courses by student id */
router.post('/student', function (req, res) {
    var token = req.headers.auth_token;
    if (!token) {
        res.status(401).send("Access Denied")
    }
    try {
        var student_id = jwt.decode(req.headers.auth_token, key)._id
    } catch (err) {
        throw err
    }
    // Query a list of course teach by instructor
    var sql = 'SELECT course_id, course_name FROM Student JOIN StudentHasCourses USING (student_id) JOIN Course USING (course_id) WHERE student_id = ? '
    connection.query(sql, student_id, function (err, result) {
        if (err) throw err
        res.send(result);
    })
});


/* GET list of courses by student id */
router.post('/updateCourseHasProjects', function (req, res) {
    var course_id = req.body.course_id;
    var project_id = req.body.project_id;
    if (!course_id || !project_id) {
        res.status(401).send("Access Denied")
    }
    var sql = 'INSERT INTO CourseHasProjects (course_id, project_id) VALUES(?, ?) ';
    var variable = [course_id, project_id]
    connection.query(sql, variable, function (err, result) {
        if (err) throw err
        res.send(result);
    })
});









module.exports = router;
