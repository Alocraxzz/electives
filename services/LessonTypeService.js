const LessonType = require('../models/LessonType');

class LessonTypeService {
    async index() {
        const lessonTypes = await LessonType.find();

        return lessonTypes;
    }

    async store(lessonType) {
        const createdLessonType = await LessonType.create(lessonType);

        return createdLessonType;
    }

    async getById(id) {
        if (!id) {
            throw new Error("LessonTypeService.getById method did not receive an id");
        }

        const lessonType = await LessonType.findById(id);

        if (!lessonType) {
            throw new Error("Document not found");
        }

        return lessonType;
    }

    async update(id, requestBody) {
        const lessonType = await LessonType.findById(id);
        const editedLessonType = new LessonType(requestBody);
    
        if (!lessonType) { throw new Error("Document not found"); }
    
        await lessonType.copy(editedLessonType);
    
        const result = await LessonType.replaceOne({ _id: id }, lessonType);
    
        return result;
    }

    async destroy(id) {
        if (!id) {
            throw new Error("LessonTypeService.destroy method did not receive an id");
        }

        const result = await LessonType.deleteOne({ _id: id});

        if (!result) {
            throw new Error ("Document not found");
        }

        return result;
    }
}

module.exports = new LessonTypeService();