const Student = require('../models/Student');

const populatePatter = [
    {
        path: "electives",
        populate: [
            {
                path: "subject"
            },
            {
                path: "lessonType"
            }
        ]
    }, 
    {
        path: "exams",
        select: "_id mark subject",
        populate: {
            path: "subject"
        }
    }
];

class StudentService {
    async index() {
        let students = await Student.find()
            .populate(populatePatter);

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
        if (!id) {
            throw new Error("StudentService.update method did not receive an id");
        }

        const student = await Student.findById(id);

        if (!student) { 
            throw new Error("Document not found"); 
        }
        
        console.log(requestBody);

        await student.copy(requestBody);
    
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