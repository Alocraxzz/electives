const mongoose   = require("mongoose");
const { Schema } = mongoose;

const SubjectSchema = new Schema({
    name: { type: String, required: true, unique: true },
    load: { type: Number, required: true },
    from: { type: Date, required: true },
    to: { type: Date, required: true },
}, {
    versionKey: false,
});

// id: true, toJSON: {
//      virtuals: true,
//     versionKey: false
// }

SubjectSchema.methods.copy = async function copy (from) {
    from.name && (this.name = from.name);
    from.load && (this.load = from.load);
    from.from && (this.from = from.from);
    from.to && (this.to = from.to);
};

module.exports = mongoose.model("Subject", SubjectSchema);