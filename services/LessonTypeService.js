const LessonType = require('../models/LessonType')

class LessonTypeService {
    async index () {
        return LessonType.find()
    }

    async store (lessonType) {
        return LessonType.create(lessonType)
    }

    async getById (id) {
        const lessonType = await LessonType.findById(id)

        if (!lessonType) {
            throw new Error('Document not found')
        }

        return lessonType
    }

    async update (id, requestBody) {
        const lessonType = await LessonType.findById(id)

        if (!lessonType) {
            throw new Error('Document not found')
        }

        await lessonType.copy(requestBody)

        return LessonType.replaceOne({ _id: id }, lessonType)
    }

    async destroy (id) {
        const result = await LessonType.deleteOne({ _id: id })

        if (!result) {
            throw new Error('Document not found')
        }

        return result
    }
}

module.exports = new LessonTypeService()