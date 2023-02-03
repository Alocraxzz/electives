const Student = require('../models/Student')

const populatePattern = [
    {
        path:     'electives',
        populate: [
            { path: 'subject' },
            { path: 'lessonType' },
        ],
    },
    {
        path:     'exams', select: '_id mark subject',
        populate: {
            path: 'subject',
        },
    },
]

class StudentService {
    async index () {
        return Student.find()
            .populate(populatePattern)
    }

    async store (student) {
        return Student.create(student)
    }

    async getById (id) {
        const student = await Student.findById(id)
            .populate(populatePattern)

        console.log('student virtual id: ' + student.id)

        if (!student) {
            throw new Error('Document not found')
        }

        return student
    }

    async update (id, requestBody) {
        const student = await Student.findById(id)

        if (!student) {
            throw new Error('Document not found')
        }

        console.log('StudentService update requestBody:' + requestBody)

        await student.copy(requestBody)

        return Student.replaceOne({ _id: id }, student)
    }

    async destroy (id) {
        const result = await Student.deleteOne({ _id: id })

        if (!result) {
            throw new Error('Document not found')
        }

        return result
    }
}

module.exports = new StudentService()