const ElectiveContractService = require('../services/ElectiveContractService');

class ElectiveController {
    async index(req, res) {
        const electiveContract = await ElectiveContractService.index();

        res.status(200).json(electiveContract);
    }

    async store(req, res) {
        const electiveContract = await ElectiveContractService.store(req.body);

        res.status(200).json(electiveContract);
    }

    async show(req, res) {
        const electiveContract = await ElectiveContractService.getById(req.params.id, res);

        res.status(200).json(electiveContract);
    }

    async update(req, res) {
        const result = await ElectiveContractService.update(req.params.id, req.body);

        res.status(200).json(result);
    }

    async destroy(req, res) {
        const result = await ElectiveContractService.destroy(req.params.id);

        res.status(200).json(result);
    }
}

module.exports = new ElectiveController();