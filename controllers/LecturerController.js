const Lecturer = require("../models/Lecturer");
const LecturerService = require('../services/LecturerService');

class LecturerController {
    async index(req, res) {
        const lecturers = await LecturerService.index();

        res.status(200).json(lecturers);
    }

    async store(req, res) {
        const lecturer = await LecturerService.store(req.body);

        res.status(200).json(lecturer);
    }

    async show(req, res) {
        const lecturer = await LecturerService.getById(req.params.id, res);

        res.status(200).json(lecturer);
    }

    async update(req, res) {
        const result = await LecturerService.update(req.params.id, req.body);

        res.status(200).json(result);
    }

    async destroy(req, res) {
        const result = await LecturerService.destroy(req.params.id);

        res.status(200).json(result);
    }
}

module.exports = new LecturerController();