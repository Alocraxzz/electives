const mongoose = require("mongoose");
const { Schema } = mongoose;

const LecturerSchema = new Schema({
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    thirdName: { type: String, required: true },
});

LecturerSchema.methods.copy = async function copy(from) {
    this.firstName = from.firstName ?? this.firstName;
    this.secondName = from.secondName ?? this.secondName;
    this.thirdName = from.thirdName ?? this.thirdName;
}

module.exports = mongoose.model("Lecturer", LecturerSchema);