const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    passwordHash:{
       type: String,
       required: true
    },
    isAdmin: Boolean

})

const Monkey = mongoose.model("Monkey", monkeySchema)

module.exports = Monkey;
