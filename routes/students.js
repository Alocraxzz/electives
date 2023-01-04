var express = require('express');
var router = express.Router();
const StudentController = require('../controllers/StudentController');
const { asyncCatch } = require('../utils/catch');

router.get('/', asyncCatch(StudentController.index));

router.post('/', asyncCatch(StudentController.store));

router.get('/:id', asyncCatch(StudentController.show));

router.put('/:id', asyncCatch(StudentController.update));

router.delete('/:id', asyncCatch(StudentController.destroy));

module.exports = router;