const mongoose = require("mongoose");
//const Category = require("../schemas/categorySchema")
const monkeySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    image: String,
})

const Monkey = mongoose.model("Monkey", monkeySchema)

module.exports = Monkey;



