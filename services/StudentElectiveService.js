const StudentElective = require('../models/StudentElective')

const populatePattern = [
    {
        path:     'electives',
        populate: [
            { path: 'subject' },
            { path: 'lessonType' },
        ],
    },
    "student",
]

class StudentElectiveService {
    async index () {
        return StudentElective.find().populate(populatePattern);
    }

    async store (studentElective) {
        return StudentElective.create(studentElective);
    }

    async getById (id) {
        const studentElective = await StudentElective.findById(id)
            .populate(populatePattern);

        if (!studentElective) {
            throw new Error('Document not found')
        }

        return studentElective
    }

    async update (id, requestBody) {
        const studentElective = await StudentElective.findById(id)

        if (!studentElective) {
            throw new Error('Document not found')
        }

        await studentElective.copy(requestBody)

        return StudentElective.replaceOne({ _id: id }, studentElective)
    }

    async destroy (id) {
        const result = await StudentElective.deleteOne({ _id: id })

        if (!result) {
            throw new Error('Document not found')
        }

        return result
    }
}

module.exports = new StudentElectiveService()