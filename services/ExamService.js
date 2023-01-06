const Exam = require('../models/Exam');

class ExamService {
    async index() {
        const exams = await Exam.find();

        return exams;
    }

    async store(exam) {
        const createdExam = await Exam.create(exam);

        return createdExam;
    }

    async getById(id) {
        if (!id) {
            throw new Error("ExamService.getById method did not receive an id");
        }

        const exam = await Exam.findById(id);

        if (!exam) {
            throw new Error("Document not found");
        }

        return exam;
    }

    async update(id, requestBody) {
        if (!id) {
            throw new Error("ExamService.update method did not receive an id");
        }

        const exam = await Exam.findById(id);
    
        if (!exam) {
            throw new Error("Document not found"); 
        }
    
        await exam.copy(requestBody);
    
        const result = await Exam.replaceOne({ _id: id }, exam);
    
        return result;
    }

    async destroy(id) {
        if (!id) {
            throw new Error("ExamService.destroy method did not receive an id");
        }

        const result = await Exam.deleteOne({ _id: id});

        if (!result) {
            throw new Error ("Document not found");
        }

        return result;
    }
}

module.exports = new ExamService();