const SubjectService = require('../services/SubjectService');

class SubjectController {
    async index(req, res) {
        const subjects = await SubjectService.index();

        res.status(200).json(subjects);
    }

    async store(req, res) {
        const subject = await SubjectService.store(req.body);

        res.status(200).json(subject);
    }

    async show(req, res) {
        const subject = await SubjectService.getById(req.params.id, res);

        res.status(200).json(subject);
    }

    async update(req, res) {
        const result = await SubjectService.update(req.params.id, req.body);

        res.status(200).json(result);
    }

    async destroy(req, res) {
        const result = await SubjectService.destroy(req.params.id);

        res.status(200).json(result);
    }
}

module.exports = new SubjectController();