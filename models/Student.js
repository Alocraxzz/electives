const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
    firstName: { type: "String", required: true },
    secondName: { type: "String", required: true },
    thirdName: { type: "String", required: true },
    adress: { type: "String", required: true },
    phone: { type: "String", required: true }
});

StudentSchema.methods.copy = async function copy(from) {
    this.firstName = from.firstName;
    this.secondName = from.secondName;
    this.thirdName = from.thirdName;
    this.address = from.address;
    this.phone = from.phone;
}

module.exports = mongoose.model("Student", StudentSchema);