const mongoose = require("mongoose");
const { Schema } = mongoose;

const LessonTypeSchema = new Schema({
    type: { type: String, required: true, unique: true }
}, { versionKey: false });

LessonTypeSchema.methods.copy = async function copy(from) {
    this.type = from.type ?? this.type;
}

module.exports = mongoose.model("LessonType", LessonTypeSchema);