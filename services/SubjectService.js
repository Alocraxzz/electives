const Subject = require('../models/Subject');

class SubjectService {
    async index() {
        const subjects = await Subject.find();

        return subjects;
    }

    async store(subject) {
        const createdSubject = await Subject.create(subject);

        return createdSubject;
    }

    async getById(id) {
        if (!id) {
            throw new Error("SubjectService.getById method did not receive an id");
        }

        const subject = await Subject.findById(id);

        if (!subject) {
            throw new Error("Document not found");
        }

        return subject;
    }

    async update(id, requestBody) {
        if (!id) {
            throw new Error("SubjectService.update method did not receive an id");
        }

        const subject = await Subject.findById(id);
    
        if (!subject) {
            throw new Error("Document not found"); 
        }
    
        await subject.copy(requestBody);
    
        const result = await Subject.replaceOne({ _id: id }, subject);
    
        return result;
    }

    async destroy(id) {
        if (!id) {
            throw new Error("SubjectService.destroy method did not receive an id");
        }

        const result = await Subject.deleteOne({ _id: id});

        if (!result) {
            throw new Error ("Document not found");
        }

        return result;
    }
}

module.exports = new SubjectService();