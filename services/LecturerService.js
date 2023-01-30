const Lecturer = require('../models/Lecturer');

class LecturerService {
    async index() {
        return Lecturer.find();
    }

    async store(lecturer) {
        return Lecturer.create(lecturer);
    }

    async getById(id) {
        const lecturer = await Lecturer.findById(id);

        if (!lecturer) {
            throw new Error("Document not found");
        }

        return lecturer;
    }

    async update(id, requestBody) {
        const lecturer = await Lecturer.findById(id);

        if (!lecturer) {
            throw new Error("Document not found");
        }

        await lecturer.copy(requestBody);

        return Lecturer.replaceOne({_id: id}, lecturer);
    }

    async destroy(id) {
        const result = await Lecturer.deleteOne({_id: id});

        if (!result) {
            throw new Error("Document not found");
        }

        return result;
    }
}

module.exports = new LecturerService();