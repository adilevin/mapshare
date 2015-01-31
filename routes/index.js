var express = require('express');
var router = express.Router();

/* GET home page with a given api_key in the query line.
*  e.g. : 127.0.0.1:3000?api_key=1234
* */
router.get('/', function(req, res, next) {
  res.render('index', { api_key: req.query.api_key });
});

module.exports = router;
