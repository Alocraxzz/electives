const express = require('express')
const router  = express.Router()

const ElectiveContractController = require('../controllers/ElectiveContractController')

const { asyncCatch } = require('../utils/catch')

router.get('/', asyncCatch(ElectiveContractController.index))

router.post('/', asyncCatch(ElectiveContractController.store))

router.get('/:id', asyncCatch(ElectiveContractController.show))

router.put('/:id', asyncCatch(ElectiveContractController.update))

router.delete('/:id', asyncCatch(ElectiveContractController.destroy))

module.exports = router