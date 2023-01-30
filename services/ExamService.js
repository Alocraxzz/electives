const Exam = require('../models/Exam');

class ExamService {
    async index() {
        return Exam.find();
    }

    async store(exam) {
        return Exam.create(exam);
    }

    async getById(id) {
        const exam = await Exam.findById(id);

        if (!exam) {
            throw new Error("Document not found");
        }

        return exam;
    }

    async update(id, requestBody) {
        const exam = await Exam.findById(id);

        if (!exam) {
            throw new Error("Document not found");
        }

        await exam.copy(requestBody);

        return Exam.replaceOne({_id: id}, exam);
    }

    async destroy(id) {
        const result = await Exam.deleteOne({_id: id});

        if (!result) {
            throw new Error("Document not found");
        }

        return result;
    }
}

module.exports = new ExamService();