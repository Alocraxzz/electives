const mongoose = require("mongoose");
const {Schema} = mongoose;

const ExamSchema = new Schema({
    subject: {type: Schema.Types.ObjectId, ref: "Subject", required: true},
    date: {type: Date, required: true},
    mark: {type: Number, min: 1, max: 5}
}, {
    versionKey: false
});

ExamSchema.methods.copy = async function copy(from) {
    this.student = from.student ?? this.student;
    this.subject = from.subject ?? this.subject;
    this.date = from.date ?? this.date;
    this.mark = from.mark ?? this.mark;
}

module.exports = mongoose.model("Exam", ExamSchema);