const express = require('express');
const router = express.Router();
const Category = require('../model/Category')

/* GET home page. */
router.get('/', async(req, res, next) => {
    try {
        let data = await Category.find({})
        res.json(data).status(200);
    } catch (e) {
        res.json(e.message).status(400)
    }
});
///Add one Categogry
router.post('/add', async(req, res, next) => { 
    try {
        let { name } = req.body
        new Category({
            name
        }).save((err,data) => {
            res.json({message:"Category Added"}).status(200)
        })
    } catch (e) {
        res.json(e.message).status(400)
    }
});
//Get one Category
router.get('/one/:id', async(req, res, next) => { 
    try {
        let data = await Category.findById(req.params.id)
        res.json(data).status(200)
    } catch (e) {
        res.json(e.message).status(400)
    }
});
//Edit one Category
router.post('/edit/:id', async(req, res, next) => { 
    let {color} = req.body
    try {
       Category.findByIdAndUpdate(req.params.id,{color}).then(data=>{
           res.json({message:"Category succesfuly Edited",data}).status(200)
       })
    } catch (e) {
        res.json(e.message).status(400)
    }
});
///Delete 0ne special category
router.get('/delete/:id', async(req, res, next) => { 
    try {
       let data = await Category.findByIdAndDelete(req.params.id)
       res.json(data).status(200)
    } catch (e) {
        res.json(e.message).status(400)
    }
});
//Add ome list
router.post('/list/add/:id', async(req, res, next) => { 
    try {
        let { title } = req.body
        let data = await Category.findByIdAndUpdate(req.params.id, { $push: { list: { title: title }}})
        res.json(data).status(200)
        } catch (e) {
            res.json(e.message).status(400)        
        }
    });
///Delete one list
    router.get('/list/delete/:id/:listId', async(req, res, next) => { 
        try {
            let {id,listId} = req.params    
            let data = await Category.findByIdAndUpdate(id, { $pull: { list: { "_id": listId }}})
            let detal = data
            res.json(data).status(200)
            } catch (e) {
                res.json(e.message).status(400)        
            }
        });

// one list update
router.put('/list/update/:id', async (req, res, next) => { 
    try {
        let {status} = req.body
        let data = await Category.updateOne({"list._id":req.params.id},{$set:{"list.$.status":status}})
        res.json(data)
        } catch (e) {
            res.json(e.message).status(400)        
        }
    });       
module.exports = router;
