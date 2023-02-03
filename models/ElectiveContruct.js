const mongoose   = require('mongoose')
const { Schema } = mongoose

const ElectiveContractSchema = new Schema({
    count:  { type: Number, required: true },
    amount: { type: Number, required: true },
}, {
    versionKey: false,
})

ElectiveContractSchema.methods.copy = async function copy (from) {
    from.count  && (this.count  = from.count)
    from.amount && (this.amount = from.amount)
}

module.exports = mongoose.model('Elective', ElectiveContractSchema)