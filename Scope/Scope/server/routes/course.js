var express = require('express');
var router = express.Router();
var mysql = require('mysql')
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


/**
 * {Post} Get all course info that instructor teaches
 * @param {string} auth_token The auth_token of the user
 * @return {MySQL result} A collection of course and each contains course id and course name
 */
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

/**
 * {Post} Get all course info that Student Has
 * @param {string} auth_token The auth_token of the student user
 * @return {MySQL result} A collection of course and each contains course id and course name
 */
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
    // Query a list of course 
    var sql = 'SELECT course_id, course_name FROM Student JOIN StudentHasCourses USING (student_id) JOIN Course USING (course_id) WHERE student_id = ? '
    connection.query(sql, student_id, function (err, result) {
        if (err) throw err
        res.send(result);
    })
});

/**
 * {Post} Update COurseHasProjects table
 * @param {string} course_id The id of the course
 * @param {string} project_id The id of the project
 * @return {MySQL result} MySQL successful / unsuccessful update message
 */
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
