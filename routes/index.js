const express = require('express');
const Model =require('../model')
const router = express.Router();
router.post('/movie', async (req,res)=>{
    const data =  new Model({
        imdbId:req.body.imdbId,
        title:req.body.title,
        year:req.body.year,
        runtime:req.body.runtime,
        genre:req.body.genre,
        writer:req.body.writer,
        actors:req.body.actors,
        plot:req.body.plot,
        images:req.body.images,
        imdbRating:req.body.imdbRating,
    });
    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(404).status.json({message : error.message})
    }
})
router.get('/movies', async (req,res)=>{
try{
    const data = await Model.find();
    res.json(data)
}
catch(error){
    res.status(500).status.json({message : error.message})
}
})
router.put('/movie/:id', async (req,res)=>{
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).status.json({message : error.message})
    }
    })
    
    router.put('/movie/:id', async (req,res)=>{
        try{
            const result = await Model.findByIdAndDelete(req.params.id,req.body.id,{new:true });
            res.send('Data Sucessfully Deleted')
        }
        catch(error){
            res.status(500).status.json({message : error.message})
        }
        })
module.exports= router;