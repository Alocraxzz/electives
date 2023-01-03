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
            const student = await Student.storeFromRequest(req);

            res.status(200).json(student);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async show(req, res) {
        try {
            const student = await Student.findById(req.params.id);

            res.status(200).json(student);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async update(req, res) {
        try {
            const student = await Student.updateFromRequest(req);

            res.status(200).json(student);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async destroy(req, res) {
        try {
            const result = await Student.findByIdAndDelete(req.params.id, { new: true });

            if (!result) {
                return res.status(500).json({ message: "Document not found" });
            }

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new StudentController();