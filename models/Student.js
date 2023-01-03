const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
    firstName: { type: "String", required: true },
    secondName: { type: "String", required: true },
    thirdName: { type: "String", required: true },
    adress: { type: "String", required: true },
    phone: { type: "String", required: true },
});

StudentSchema.statics.storeFromRequest = async function storeFromRequest(req) {
    const student = new mongoose.model("Student", StudentSchema)(req.body);

    await student.save();

    return student;
}

StudentSchema.statics.updateFromRequest = async function updateFromRequest(req) {
    const student = new mongoose.model("Student", StudentSchema)(req.body);

    await this.model('Student').replaceOne({ _id: req.params.id }, student);

    return student;
}

module.exports = mongoose.model("Student", StudentSchema);