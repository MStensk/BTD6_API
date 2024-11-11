const mongoose = require("mongoose");
//const Category = require("../schemas/categorySchema")
const monkeySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    richDescription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String
    }],
    rating: String,
    price: Number,
    category: {
        type: String,
        required: true
    }

})

exports.Monkey = mongoose.model('Monkey', monkeySchema)




