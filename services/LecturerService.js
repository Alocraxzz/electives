const Lecturer = require('../models/Lecturer');

class LecturerService {
    async index() {
        const lecturers = await Lecturer.find();

        return lecturers;
    }

    async store(lecturer) {
        const createdLecturer = await Lecturer.create(lecturer);

        return createdLecturer;
    }

    async getById(id) {
        if (!id) {
            throw new Error("LecturerService.getById method did not receive an id");
        }

        const lecturer = await Lecturer.findById(id);

        if (!lecturer) {
            throw new Error("Document not found");
        }

        return lecturer;
    }

    async update(id, requestBody) {
        const lecturer = await Lecturer.findById(id);
        const editedLecturer = new Lecturer(requestBody);
    
        if (!lecturer) { throw new Error("Document not found"); }
    
        await lecturer.copy(editedLecturer);
    
        const result = await Lecturer.replaceOne({ _id: id }, lecturer);
    
        return result;
    }

    async destroy(id) {
        if (!id) {
            throw new Error("LecturerService.destroy method did not receive an id");
        }

        const result = await Lecturer.deleteOne({ _id: id});

        if (!result) {
            throw new Error ("Document not found");
        }

        return result;
    }
}

module.exports = new LecturerService();