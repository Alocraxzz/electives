var express = require('express');
var router = express.Router();
const User = require('../routes/users');

/* GET home page. */
router.get('/', async (req, res) => {
  res.status(200).json("Server work fine");
});

module.exports = router;
