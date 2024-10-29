const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv/config");
const app = express();

//route declarations
const monkeysRouter = require("./routes/monkeys.js");
const categoryRouter = require("./routes/categories.js");
const userRouter = require("./routes/users.js")

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));



//db connection
const connection = process.env.CONNECTION_STRING
const api = process.env.API_URL

//routes
app.use(`${api}/monkeys`, monkeysRouter)
app.use(`${api}/categories`, categoryRouter)
app.use(`${api}/users`, userRouter)



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