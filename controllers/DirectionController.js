const DirectionService = require('../services/DirectionService');

class DirectionController {
    async index(req, res) {
        const electives = await DirectionService.index();

        res.status(200).json(electives);
    }

    async store(req, res) {
        const elective = await DirectionService.store(req.body);

        res.status(200).json(elective);
    }

    async show(req, res) {
        const elective = await DirectionService.getById(req.params.id, res);

        res.status(200).json(elective);
    }

    async update(req, res) {
        const result = await DirectionService.update(req.params.id, req.body);

        res.status(200).json(result);
    }

    async destroy(req, res) {
        const result = await DirectionService.destroy(req.params.id);

        res.status(200).json(result);
    }
}

module.exports = new DirectionController();