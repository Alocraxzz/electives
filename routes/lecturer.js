var express = require('express');
var router = express.Router();

const { asyncCatch } = require('../utils/catch');

const LecturerController = require('../controllers/LecturerController');

router.get('/', asyncCatch(LecturerController.index));

router.post('/', asyncCatch(LecturerController.store));

router.get('/:id', asyncCatch(LecturerController.show));

router.put('/:id', asyncCatch(LecturerController.update));

router.delete('/:id', asyncCatch(LecturerController.destroy));

module.exports = router;