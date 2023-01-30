const express = require('express');
const router = express.Router();

const ExamController = require('../controllers/ExamController');

const {asyncCatch} = require('../utils/catch');

router.get('/', asyncCatch(ExamController.index));

router.post('/', asyncCatch(ExamController.store));

router.get('/:id', asyncCatch(ExamController.show));

router.put('/:id', asyncCatch(ExamController.update));

router.delete('/:id', asyncCatch(ExamController.destroy));

module.exports = router;