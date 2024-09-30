const express = require("express");
const router = express.Router();
const Monkey = require("../schemas/monkeySchema");


router.get(`/`, async (req, res) => {
    try {
        const monkeyList = await Monkey.find();
    res.status(201).send(monkeyList)
    } catch {
        res.status(400).send(error)
    }
})

router.post(`/`, async (req, res) => {
    try {
        const newMonkey = new Monkey(req.body)
        await newMonkey.save();
        res.status(201).send(newMonkey)
    } catch {
        res.status(400).send(error)
    }
})

module.exports = router;