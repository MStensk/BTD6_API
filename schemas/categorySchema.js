const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    icon: String,
    image: String,
})

exports.Category = mongoose.model('Category', categorySchema)
