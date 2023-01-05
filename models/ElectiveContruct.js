const mongoose = require("mongoose");
const { Schema } = mongoose;

const ElectiveContructSchema = new Schema({
    count:      { type: Number, required: true },
    amount:     { type: Number, required: true },
    lecturers: [
        { type: Schema.Types.ObjectId, ref: "Lecturer" }
    ]
});

ElectiveContructSchema.methods.copy = async function copy(from) {
    this.hours      = from.hours     ?? this.hours;
    this.direction  = from.direction ?? this.direction;
    this.type       = from.type      ?? this.type;
    this.lecturers  = from.lecturers ?? this.lecturers;
}

module.exports = mongoose.model("Elective", ElectiveContructSchema);