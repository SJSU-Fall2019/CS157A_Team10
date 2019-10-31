var express = require('express');
var router = express.Router();

/* GET Team listing. */
router.get('/', function(req, res, next) {
  res.send('You are on team route');
});

module.exports = router;
