var express = require('express');
var router = express.Router();
const ElectivesController = require('../controllers/ElectivesController');

router.get('/', ElectivesController.index);

router.post('/', ElectivesController.store);

router.get('/:id', ElectivesController.show);

router.put('/:id', ElectivesController.update);

router.delete('/:id', ElectivesController.destroy);

module.exports = router;