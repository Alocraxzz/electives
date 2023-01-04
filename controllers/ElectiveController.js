const ElectiveService = require('../services/ElectiveService');

class ElectiveController {
    async index(req, res) {
        const electives = await ElectiveService.index();

        res.status(200).json(electives);
    }

    async store(req, res) {
        const elective = await ElectiveService.store(req.body);

        res.status(200).json(elective);
    }

    async show(req, res) {
        const elective = await ElectiveService.getById(req.params.id, res);

        res.status(200).json(elective);
    }

    async update(req, res) {
        const result = await ElectiveService.update(req.params.id, req.body);

        res.status(200).json(result);
    }

    async destroy(req, res) {
        const result = await ElectiveService.destroy(req.params.id);

        res.status(200).json(result);
    }
}

module.exports = new ElectiveController();