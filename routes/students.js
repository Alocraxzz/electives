var express = require('express');
var router = express.Router();
const Student = require("../models/Student.js");

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const { firstName, secondName, thirdName, adress, phone } = req.body;
        const student = await Student.create({ firstName, secondName, thirdName, adress, phone });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    const { firstName, secondName, thirdName, adress,phone } = req.body;
    const student = await Student.create({ firstName, secondName, thirdName, adress, phone });
    res.status(200).json(student);
});

module.exports = router;