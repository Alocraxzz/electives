const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstname: { type: "String", require: true },
    age: { type: "String", require: true },
});

module.exports = mongoose.model("User", UserSchema);