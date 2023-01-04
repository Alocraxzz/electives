const Elective = require('../models/Elective');

class ElectiveService {
    async index() {
        const electives = await Elective.find();

        return electives;
    }

    async store(elective) {
        const createdElective = await Elective.create(elective);

        return createdElective;
    }

    async getById(id) {
        if (!id) {
            throw new Error("ElectiveService.getById method did not receive an id");
        }

        const elective = await Elective.findById(id);

        if (!elective) {
            throw new Error("Document not found");
        }

        return elective;
    }

    async update(id, requestBody) {
        const elective = await Elective.findById(id);
        const editedElective = new Elective(requestBody);
    
        if (!elective) { throw new Error("Document not found"); }
    
        await elective.copy(editedElective);
    
        const result = await Elective.replaceOne({ _id: id }, elective);
    
        return result;
    }

    async destroy(id) {
        if (!id) {
            throw new Error("ElectiveService.destroy method did not receive an id");
        }

        const result = await Elective.deleteOne({ _id: id});

        if (!result) {
            throw new Error ("Document not found");
        }

        return result;
    }
}

module.exports = new ElectiveService();