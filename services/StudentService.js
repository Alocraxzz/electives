const Student = require('../models/Student');

class StudentService {
    async index() {
        const students = await Student.find();

        return students;
    }

    async store(student) {
        const createdStudent = await Student.create(student);

        return createdStudent;
    }

    async getById(id) {
        if (!id) {
            throw new Error("StudentService.getById method did not receive an id");
        }

        const student = await Student.findById(id);

        if (!student) {
            throw new Error("Document not found");
        }

        return student;
    }

    async update(id, requestBody) {
        const student = await Student.findById(id);
        const editedStudent = new Student(requestBody);
    
        if (!student) { 
            throw new Error("Document not found"); 
        }
    
        await student.copy(editedStudent);
    
        const result = await Student.replaceOne({ _id: id }, student);
    
        return result;
    }

    async destroy(id) {
        if (!id) {
            throw new Error("StudentService.destroy method did not receive an id");
        }

        const result = await Student.deleteOne({ _id: id});

        if (!result) {
            throw new Error ("Document not found");
        }

        return result;
    }
}

module.exports = new StudentService();