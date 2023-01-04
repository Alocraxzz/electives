const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    thirdName: { type: String, required: true },
    adress: { type: String, required: true },
    phone: { type: String, required: true },
    electives: [{ type: Schema.Types.ObjectId, ref: "Elective" }]
});

StudentSchema.methods.copy = async function copy(from) {
    this.firstName = from.firstName ?? this.firstName;
    this.secondName = from.secondName ?? this.secondName;
    this.thirdName = from.thirdName ?? this.thirdName;
    this.address = from.address ?? this.address;
    this.phone = from.phone ?? this.electives;
    this.electives = from.electives ?? this.electives;
}

module.exports = mongoose.model("Student", StudentSchema);