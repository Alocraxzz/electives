var express = require('express');
var router = express.Router();

const DirectionController = require('../controllers/DirectionController');

const { asyncCatch } = require('../utils/catch');

router.get('/', asyncCatch(DirectionController.index));

router.post('/', asyncCatch(DirectionController.store));

router.get('/:id', asyncCatch(DirectionController.show));

router.put('/:id', asyncCatch(DirectionController.update));

router.delete('/:id', asyncCatch(DirectionController.destroy));

module.exports = router;