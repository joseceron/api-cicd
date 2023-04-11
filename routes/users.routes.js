var express = require('express');
var router = express.Router();
const UserController = require('../controllers/users.controller')

/* GET users listing. */
router.get('/', UserController.get);

module.exports = router;
