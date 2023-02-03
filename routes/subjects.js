const express = require('express')
const router  = express.Router()

const SubjectController = require('../controllers/SubjectController')

const { asyncCatch } = require('../utils/catch')

router.get('/', asyncCatch(SubjectController.index))

router.post('/', asyncCatch(SubjectController.store))

router.get('/:id', asyncCatch(SubjectController.show))

router.put('/:id', asyncCatch(SubjectController.update))

router.delete('/:id', asyncCatch(SubjectController.destroy))

module.exports = router