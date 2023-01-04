const mongoose = require("mongoose");
const { Schema } = mongoose;

const TypeOfLessonSchema = new Schema({
    type: { type: String, required: true, index: true, unique: true }
});

TypeOfLessonSchema.methods.copy = async function copy(from) {
    this.type = from.type ?? this.type;
}

module.exports = mongoose.model("TypeOfLesson", TypeOfLessonSchema);