var express = require('express');
var router = express.Router();

const ElectiveController = require('../controllers/ElectiveController');

const { asyncCatch } = require('../utils/catch');

router.get('/', asyncCatch(ElectiveController.index));

router.post('/', asyncCatch(ElectiveController.store));

router.get('/:id', asyncCatch(ElectiveController.show));

router.put('/:id', asyncCatch(ElectiveController.update));

router.delete('/:id', asyncCatch(ElectiveController.destroy));

module.exports = router;