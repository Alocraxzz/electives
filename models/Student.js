const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
    firstName: { type: "String", require: true },
    secondName: { type: "String", require: true },
    thirdName: { type: "String", require: true },
    adress: { type: "String", require: true },
    phone: { type: "String", require: true }
});

module.exports = mongoose.model("Student", StudentSchema);