const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  res.status(200).json("Server work fine");
});

module.exports = router;
