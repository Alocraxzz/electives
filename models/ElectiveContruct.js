const mongoose = require("mongoose");
const {Schema} = mongoose;

const ElectiveContractSchema = new Schema({
    count: {type: Number, required: true},
    amount: {type: Number, required: true}
}, {
    versionKey: false
});

ElectiveContractSchema.methods.copy = async function copy(from) {
    this.count = from.count ?? this.count;
    this.amount = from.amount ?? this.amount;
}

module.exports = mongoose.model("Elective", ElectiveContractSchema);