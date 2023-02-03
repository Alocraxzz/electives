const Elective = require('../models/Elective')

class ElectiveService {
    async index () {
        return Elective.find()
    }

    async store (elective) {
        return Elective.create(elective)
    }

    async getById (id) {
        const elective = await Elective.findById(id)

        if (!elective) {
            throw new Error('Document not found')
        }

        return elective
    }

    async update (id, requestBody) {
        const elective = await Elective.findById(id)

        if (!elective) {
            throw new Error('Document not found')
        }

        await elective.copy(requestBody)

        return Elective.replaceOne({ _id: id }, elective)
    }

    async destroy (id) {
        const result = await Elective.deleteOne({ _id: id })

        if (!result) {
            throw new Error('Document not found')
        }

        return result
    }
}

module.exports = new ElectiveService()