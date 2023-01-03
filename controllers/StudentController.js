const Student = require("../models/Student");

class StudentController {
    async index(req, res) {
        try {
            const students = await Student.find();

            res.status(200).json(students);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async store(req, res) {
        try {
            const { firstName, secondName, thirdName, adress, phone } = req.body;
            const student = await Student.create({ firstName, secondName, thirdName, adress, phone });

            res.status(200).json(student);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const student = await Student.findById(id);

            res.status(200).json(student);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { firstName, secondName, thirdName, adress, phone } = req.body;

            const result = await Student.replaceOne({ _id: id}, { firstName, secondName, thirdName, adress, phone });

            res.status(200).json({ 
                data: { firstName, secondName, thirdName, adress, phone },
                result: result
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async destroy(req, res) {
        try {
            const { id } = req.params;
            const result = await Student.deleteOne({ _id: id });

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new StudentController();