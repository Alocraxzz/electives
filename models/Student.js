const mongoose   = require('mongoose')
const { Schema } = mongoose

const StudentSchema = new Schema({
    firstName:  { type: String, required: true },
    secondName: { type: String, required: true },
    thirdName:  { type: String, required: true },
    address:    { type: String, required: true },
    phone:      { type: String, required: true },
}, {
    versionKey: false,
})

StudentSchema.methods.copy = async function copy (from) {
    from.firstName  && (this.firstName  = from.firstName)
    from.secondName && (this.secondName = from.secondName)
    from.thirdName  && (this.thirdName  = from.thirdName)
    from.address    && (this.address    = from.address)
    from.phone      && (this.phone      = from.phone)
}

module.exports = mongoose.model('Student', StudentSchema)