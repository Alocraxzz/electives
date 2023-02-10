const Subject = require('../models/Subject')

class SubjectService {
    async index () {
        const subjects = Subject.find();

        return subjects;
    }

    async store (subject) {
        return Subject.create(subject)
    }

    async getById (id) {
        const subject = await Subject.findById(id)

        if (!subject) {
            throw new Error('Document not found')
        }

        return subject
    }

    async update (id, requestBody) {
        const subject = await Subject.findById(id)

        if (!subject) {
            throw new Error('Document not found')
        }

        await subject.copy(requestBody)

        return Subject.replaceOne({ _id: id }, subject)
    }

    async destroy (id) {
        const result = await Subject.deleteOne({ _id: id })

        if (!result) {
            throw new Error('Document not found')
        }

        return result
    }
}

module.exports = new SubjectService()