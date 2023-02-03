const mongoose   = require('mongoose')
const { Schema } = mongoose

const ElectiveSchema = new Schema({
    subject:    { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
    duration:   {
        from: { type: Date, required: true },
        to:   { type: Date, required: true },
    },
    hours:      { type: Number, required: true },
    lessonType: { type: Schema.Types.ObjectId, ref: 'LessonType' },
    lecturers:  [
        { type: Schema.Types.ObjectId, ref: 'Lecturer' },
    ],
}, {
    versionKey: false,
})

ElectiveSchema.methods.copy = async function copy (from) {
    from.subject    && (this.subject    = from.subject)
    from.duration   && (this.duration   = from.duration)
    from.hours      && (this.hours      = from.hours)
    from.lessonType && (this.lessonType = from.lessonType)

    from.lecturers  && (this.lecturers  = from.lecturers)
}

module.exports = mongoose.model('Elective', ElectiveSchema)