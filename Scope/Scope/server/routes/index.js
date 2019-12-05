var express = require('express');
var router = express.Router();

/**
 * {Post} Default Page
 * @return {Page} Express Welcome Page
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
