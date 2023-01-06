const ExamService = require('../services/ExamService');

class ExamController {
    async index(req, res) {
        const exams = await ExamService.index();

        res.status(200).json(exams);
    }

    async store(req, res) {
        const exam = await ExamService.store(req.body);

        res.status(200).json(exam);
    }

    async show(req, res) {
        const exam = await ExamService.getById(req.params.id, res);

        res.status(200).json(exam);
    }

    async update(req, res) {
        const result = await ExamService.update(req.params.id, req.body);

        res.status(200).json(result);
    }

    async destroy(req, res) {
        const result = await ExamService.destroy(req.params.id);

        res.status(200).json(result);
    }
}

module.exports = new ExamController();