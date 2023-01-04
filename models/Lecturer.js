const mongoose = require("mongoose");
const { Schema } = mongoose;

const LecturerSchema = new Schema({
    firstName: { type: "String", required: true },
    secondName: { type: "String", required: true },
    thirdName: { type: "String", required: true },
});

LecturerSchema.methods.copy = async function copy(from) {
    this.firstName = from.firstName;
    this.secondName = from.secondName;
    this.thirdName = from.thirdName;
}

module.exports = mongoose.model("Lecturer", LecturerSchema);