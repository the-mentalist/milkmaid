var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/json/products', function(req, res, next) {
  res.send('products object');
});

module.exports = router;
