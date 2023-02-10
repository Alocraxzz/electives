const StudentElectiveService = require('../services/StudentElectiveService');

class StudentElectiveController {
    async index(req, res) {
        const student_elective = await StudentElectiveService.index();

        res.status(200).json(student_elective);
    }

    async store(req, res) {
        const student_elective = await StudentElectiveService.store(req.body);

        res.status(200).json(student_elective);
    }

    async show(req, res) {
        const student_elective = await StudentElectiveService.getById(req.params.id, res);

        res.status(200).json(student_elective);
    }

    async update(req, res) {
        const result = await StudentElectiveService.update(req.params.id, req.body);

        res.status(200).json(result);
    }

    async destroy(req, res) {
        const result = await StudentElectiveService.destroy(req.params.id);

        res.status(200).json(result);
    }
}

module.exports = new StudentElectiveController();