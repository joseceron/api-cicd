var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = {id: 1, name: 'Jose Luis'}
  res.status(200).json(user)
});

module.exports = router;
