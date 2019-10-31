var express = require('express');
var router = express.Router();

/* GET Project listing. */
router.get('/', function(req, res, next) {
  res.send('You are on project route');
});

module.exports = router;
