const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const monkeysRouter = require("./routes/monkeys.js")
const app = express();
require("dotenv/config");

app.use(bodyParser.json());
app.use(morgan("tiny"));



//db connection
const connection = process.env.CONNECTION_STRING
const api = process.env.API_URL

app.use(`${api}/monkeys`, monkeysRouter)


mongoose.connect(`${connection}`)
    .then(() => {
        console.log("db connection is ready")
    })
    .catch((err) => {
        console.log(err)
    })

//server running    
app.listen(3000, () => {
    console.log(api);
    console.log("server running on port 3000")
})