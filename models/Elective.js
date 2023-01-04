const mongoose = require("mongoose");
const { Schema } = mongoose;

const ElectiveSchema = new Schema({
    hours: { type: Number, required: true },
    direction: { type: String, required: true },
    type: {
        type: Schema.Types.ObjectId, ref: 'TypeOfLesson'
    }
});

ElectiveSchema.methods.copy = async function copy(from) {
    this.hours = from.hours ?? this.hours;
    this.direction = from.direction ?? this.direction;
    this.type = from.type ?? this.type;
}

module.exports = mongoose.model("Elective", ElectiveSchema);