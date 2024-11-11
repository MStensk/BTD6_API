const express = require("express");
const router = express.Router();
const {Monkey} = require("../schemas/monkeySchema");
const {Category} = require("../schemas/categorySchema")

router.get(`/`, async (req, res) => {
    try {
        const monkeyList = await Monkey.find();
    res.status(201).send(monkeyList)
    } catch {
        res.status(400).send("error")
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const monkey = await Monkey.findById(req.params.id);
        res.status(201).send(monkey)
    }
    catch {
        res.status(500).json({success: false, message: "monkey with given id was not found."})
    }

})

router.post(`/`, async (req, res) => {
    try {
        const category = await Category.findOne({name: req.body.category});
        if(!category) return res.status(400).send("invalid category")
        let monkey = new Monkey(req.body)
        monkey = await monkey.save()
        res.status(201).send(monkey)
    } catch {
        res.status(404).send("GG")
    }
})

router.put('/:id', async (req, res)=>{
    try {
        const monkey = await Monkey.findByIdAndUpdate(req.params.id, req.body)
        res.send(monkey)
    } catch {
        res.status(400).send("GG")
    }
})

router.delete('/:id', (req, res) => {
    Monkey.findByIdAndDelete(req.params.id).then(monkey=> {
        if(monkey) {
            return res.status(200).json({success: true, message: 'the monkey was deleted'})
        } else {
            return res.status(400).json({success: false, message : "monkey deletion failed"})
        }
    }).catch(err =>{
        return res.status(400).json({success: false, error: err})
    })
})

module.exports = router;