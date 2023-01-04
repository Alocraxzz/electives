const mongoose = require("mongoose");
const { Schema } = mongoose;

const DirectionSchema = new Schema({
    direction: { type: String, required: true}
});

DirectionSchema.methods.copy = async function copy(from) {
    this.direction = from.direction ?? this.direction;
}

module.exports = mongoose.model("Direction", DirectionSchema);