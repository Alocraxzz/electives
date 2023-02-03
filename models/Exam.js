const mongoose   = require('mongoose')
const { Schema } = mongoose

const ExamSchema = new Schema({
    subject: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
    date:    { type: Date, required: true },
    mark:    { type: Number, min: 1, max: 5 },
}, {
    versionKey: false,
})

ExamSchema.methods.copy = async function copy (from) {
    from.student && (this.student = from.student)
    from.subject && (this.subject = from.subject)
    from.date    && (this.date    = from.date)
    from.mark    && (this.mark    = from.mark)
}

module.exports = mongoose.model('Exam', ExamSchema)