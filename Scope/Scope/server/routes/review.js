var express = require('express');
var router = express.Router();

/* GET Review listing. */
router.get('/', function(req, res, next) {
  res.send('You are on review route');
});

module.exports = router;
