const StudentService = require('../services/StudentService');

class StudentController {
    async index(req, res) {
        const students = await StudentService.index();

        res.status(200).json(students);
    }

    async store(req, res) {
        const student = await StudentService.store(req.body);

        res.status(200).json(student);
    }

    async show(req, res) {
        const student = await StudentService.getById(req.params.id, res);

        res.status(200).json(student);
    }

    async update(req, res) {
        const result = await StudentService.update(req.params.id, req.body);

        res.status(200).json(result);
    }

    async destroy(req, res) {
        const result = await StudentService.destroy(req.params.id);

        res.status(200).json(result);
    }
}

module.exports = new StudentController();