const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Monkey = require("./schemas/monkeySchema.js")
const app = express();
require("dotenv/config");

app.use(bodyParser.json());
app.use(morgan("tiny"));

const connection = process.env.CONNECTION_STRING
const api = process.env.API_URL

mongoose.connect(`${connection}`)
    .then(() => {
        console.log("db connection is ready")
    })
    .catch((err) => {
        console.log(err)
    })
app.listen(3000, () => {
    console.log(api);
    console.log("server running on port 3000")
})

app.get(`${api}/monkeys`, (req, res) => {
    const monkey = {
        id: 1,
        name: "Dart Monkey",
        image: "Dart_Monkey.png"
    }
    res.send(monkey)
})

app.post(`${api}/monkeys`, async (req, res) => {
    try {
        const newMonkey = new Monkey(req.body)
        await newMonkey.save();
        res.status(201).send(newMonkey)
    } catch {
        res.status(400).send(error)
    }
})