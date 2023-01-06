var express = require('express');
var router = express.Router();

const LessonTypeController = require('../controllers/LessonTypeController');

const { asyncCatch } = require('../utils/catch');

router.get('/', asyncCatch(LessonTypeController.index));

router.post('/', asyncCatch(LessonTypeController.store));

router.get('/:id', asyncCatch(LessonTypeController.show));

router.put('/:id', asyncCatch(LessonTypeController.update));

router.delete('/:id', asyncCatch(LessonTypeController.destroy));

module.exports = router;