const mongoose = require("mongoose");
const { Schema } = mongoose;

const ElectiveSchema = new Schema({
    subject: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
    duration: { 
        from: { type: Date, required: true },
        to:   { type: Date, required: true },
    },
    hours: { type: Number, required: true },
    lessonType: { type: Schema.Types.ObjectId, ref: 'LessonType' },
    lecturers: [
        { type: Schema.Types.ObjectId, ref: "Lecturer" }
    ]
}, { versionKey: false });

ElectiveSchema.methods.copy = async function copy(from) {
    this.hours      = from.hours     ?? this.hours;
    this.subject    = from.subject   ?? this.subject;
    this.type       = from.type      ?? this.type;
    this.lecturers  = from.lecturers ?? this.lecturers;
}

module.exports = mongoose.model("Elective", ElectiveSchema);