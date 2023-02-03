const mongoose   = require('mongoose')
const { Schema } = mongoose

const LecturerSchema = new Schema({
    firstName:  { type: String, required: true },
    secondName: { type: String, required: true },
    thirdName:  { type: String, required: true },
    electives:  [{ type: Schema.Types.ObjectId, ref: 'Elective' }],
}, {
    versionKey: false,
})

LecturerSchema.methods.copy = async function copy (from) {
    from.firstName  && (this.firstName  = from.firstName)
    from.secondName && (this.secondName = from.secondName)
    from.thirdName  && (this.thirdName  = from.thirdName)

    from.electives  && (this.electives  = from.electives)
}

module.exports = mongoose.model('Lecturer', LecturerSchema)