const express = require("express");
const router = express.Router();
const Category = require("../schemas/categorySchema");


router.get(`/`, async (req, res) => {
    try {
        const categoryList = await Category.find();
    res.status(201).send(categoryList)
    } catch {
        res.status(400).send(error)
    }
})

router.post(`/`, async (req, res) => {
    try {
        const newCategory = new Category(req.body)
        await newCategory.save();
        res.status(201).send(newCategory)
    } catch {
        res.status(400).send(error)
    }
})

module.exports = router;