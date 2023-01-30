const mongoose = require("mongoose");
const {Schema} = mongoose;

const StudentSchema = new Schema({
    firstName: {type: String, required: true},
    secondName: {type: String, required: true},
    thirdName: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    electives: [
        {type: Schema.Types.ObjectId, ref: "Elective"}
    ],
    exams: [
        {type: Schema.Types.ObjectId, ref: "Exam"}
    ]
}, {
    versionKey: false
});

StudentSchema.methods.copy = async function copy(from) {
    this.firstName = from.firstName ?? this.firstName;
    this.secondName = from.secondName ?? this.secondName;
    this.thirdName = from.thirdName ?? this.thirdName;
    this.address = from.address ?? this.address;
    this.phone = from.phone ?? this.phone;

    if (from.electives) {
        this.electives = from.electives;
    }

    if (from.exams) {
        this.exams = from.exams;
    }
}

module.exports = mongoose.model("Student", StudentSchema);