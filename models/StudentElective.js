const mongoose   = require('mongoose')
const { Schema } = mongoose

const StudentElective = new Schema({
    student:    { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    electives:  [
        { type: Schema.Types.ObjectId, ref: 'Elective' },
    ],
}, {
    versionKey: false,
})

StudentElective.methods.copy = async function copy (from) {
    from.student    && (this.student    = from.student)
    from.electives  && (this.electives  = from.electives)
}

module.exports = mongoose.model('StudentElective', StudentElective)