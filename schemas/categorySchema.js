const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: String,
    image: String,
})

const Category = mongoose.model("Category", categorySchema)

module.exports = Category;
