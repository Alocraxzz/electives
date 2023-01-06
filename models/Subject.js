const mongoose = require("mongoose");
const { Schema } = mongoose;

const SubjectSchema = new Schema({
    name: { type: String, required: true, unique: true },
    duration: { 
        from: { type: Date, required: true },
        to:   { type: Date, required: true },
    },
    load: { type: Number, required: true }
}, { versionKey: false });

SubjectSchema.methods.copy = async function copy(from) {
    this.name     = from.name     ?? this.name;
    this.duration = from.duration ?? this.duration;
    this.load     = from.load     ?? this.load;
}

module.exports = mongoose.model("Subject", SubjectSchema);