const mongoose = require("mongoose");

const monkeySchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
})

const Monkey = mongoose.model("Monkey", monkeySchema)

module.exports = Monkey;



