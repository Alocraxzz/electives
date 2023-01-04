var express = require('express');
var router = express.Router();
const ElectiveController = require('../controllers/ElectiveController');

router.get('/', ElectiveController.index);

router.post('/', ElectiveController.store);

router.get('/:id', ElectiveController.show);

router.put('/:id', ElectiveController.update);

router.delete('/:id', ElectiveController.destroy);

module.exports = router;