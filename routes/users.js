const express = require("express");
const router = express.Router();
const User = require("../schemas/userSchema")

router.get(`/`, async (req, res) => {
    try {
        const userList = await User.find();
    res.status(201).send(userList)
    } catch {
        res.status(400).send(error)
    }
})

router.post(`/`, async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save();
        res.status(201).send(newUser)
    } catch {
        res.status(400).send(error)
    }
})

module.exports = router;