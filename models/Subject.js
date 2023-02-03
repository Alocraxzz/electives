const mongoose   = require('mongoose')
const { Schema } = mongoose

const SubjectSchema = new Schema({
    name:     { type: String, required: true, unique: true },
    duration: {
        from: { type: Date, required: true },
        to:   { type: Date, required: true },
    },
    load:     { type: Number, required: true },
}, {
    versionKey: false,
})

// id: true, toJSON: {
//      virtuals: true,
//     versionKey: false
// }

SubjectSchema.methods.copy = async function copy (from) {
    from.name     && (this.name     = from.name)
    from.duration && (this.duration = from.duration)
    from.load     && (this.load     = from.load)
}

module.exports = mongoose.model('Subject', SubjectSchema)