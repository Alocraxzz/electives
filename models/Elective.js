const mongoose = require("mongoose");
const { Schema } = mongoose;

const ElectiveSchema = new Schema({
    hours: { type: "Integer", required: true },
    direction: { type: "String", required: true },
    type: {
        id: { type: Schema.Types.ObjectId, ref: 'foodSchema'}
    }
});

ElectiveSchema.methods.copy = async function copy(from) {
    this.hours = from.hours;
    this.direction = from.direction;
}

module.exports = mongoose.model("Elective", ElectiveSchema);