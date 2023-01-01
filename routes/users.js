var express = require('express');
var router = express.Router();
const User = require('../models/Users');

router.get('', async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

/* GET users listing. */
router.post('/', async (req, res, next) => {
  const { firstname, age } = req.body;
  const user = await User.create({ firstname, age });
  res.status(200).json(req.body);
});

module.exports = router;
