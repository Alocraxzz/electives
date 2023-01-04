const LessonType = require("../models/TypeOfLesson");
const LessonTypeService = require('../services/LessonTypeService');

class LessonTypeController {
    async index(req, res) {
        const lessonTypes = await LessonTypeService.index();

        res.status(200).json(lessonTypes);
    }

    async store(req, res) {
        const lessonType = await LessonTypeService.store(req.body);

        res.status(200).json(lessonType);
    }

    async show(req, res) {
        const lessonType = await LessonTypeService.getById(req.params.id, res);

        res.status(200).json(lessonType);
    }

    async update(req, res) {
        const result = await LessonTypeService.update(req.params.id, req.body);

        res.status(200).json(result);
    }

    async destroy(req, res) {
        const result = await LessonTypeService.destroy(req.params.id);

        res.status(200).json(result);
    }
}

module.exports = new LessonTypeController();