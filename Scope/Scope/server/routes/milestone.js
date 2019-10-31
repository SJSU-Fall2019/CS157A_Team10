var express = require('express');
var router = express.Router();

/* GET Milestone listing. */
router.get('/', function(req, res, next) {
  res.send('You are on milestone route');
});

module.exports = router;
