const express = require("express");
const router = express.Router();
const {Category} = require('../schemas/categorySchema');


router.get(`/`, async (req, res) => {
    try {
        const categoryList = await Category.find();
    res.status(201).send(categoryList)
    } catch {
        res.status(400).send(error)
    }
})

router.get('/:name', async(req, res)=>{
    try{
        const category = await Category.findOne({ name: req.params.name});
        res.status(201).send(category)
    }
    catch {
        res.status(500).json({success: false, message: "category with given id was not found."})
    }

})

router.post(`/`, async (req, res) => {
    try {
        let newCategory = new Category(req.body)
        await newCategory.save();
        res.status(201).send(newCategory)
    } catch {
        res.status(400).send(error)
    }
})

router.put('/:id', async (req, res)=>{
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body)
        res.send(category)
    } catch {
        res.status(400).send(error)
    }
})

router.delete('/:id', (req, res) => {
    Category.findByIdAndDelete(req.params.id).then(category=> {
        if(category) {
            return res.status(200).json({success: true, message: 'the category was deleted'})
        } else {
            return res.status(400).json({success: false, message : "category deletion failed"})
        }
    }).catch(err =>{
        return res.status(400).json({success: false, error: err})
    })
})

module.exports = router;