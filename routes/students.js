var express = require('express');
var router = express.Router();
const Student = require("../models/Student");
const StudentController = require('../controllers/StudentController');

router.get('/', StudentController.index);

router.post('/', StudentController.store);

router.get('/:id', StudentController.show);

router.put('/:id', StudentController.update);

router.delete('/:id', StudentController.destroy);

module.exports = router;