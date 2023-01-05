const mongoose = require("mongoose");
const { Schema } = mongoose;

const ElectiveSchema = new Schema({
    direction: { type: Schema.Types.ObjectId, ref: "Direction", required: true },
    duration: { 
        from: { type: Date, required: true },
        to:   { type: Date, required: true },
    },
    hours: { type: Number, required: true },
    type: { type: Schema.Types.ObjectId, ref: 'LessonType' },
    lecturers: [
        { type: Schema.Types.ObjectId, ref: "Lecturer" }
    ]
});

ElectiveSchema.methods.copy = async function copy(from) {
    this.hours      = from.hours     ?? this.hours;
    this.direction  = from.direction ?? this.direction;
    this.type       = from.type      ?? this.type;
    this.lecturers  = from.lecturers ?? this.lecturers;
}

module.exports = mongoose.model("Elective", ElectiveSchema);