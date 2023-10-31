const mongoose=require('mongoose');
//const { default: mongoose, Mongoose } = require('mongoose');

const dataSchema = new mongoose.Schema({
    imdbId:{
        type:String,
    },
    title:{
        required:true,
        type:String,
    },
    year:{
        required:true,
        type:String,
    },
    runtime:{
        required:true,
        type:String,
    },
    genre:{
        required:true,
        type:String,
    },
    writer:{
        required:true,
        type:String,
    },
    actors:{
        required:true,
        type:String,
    },
    plot:{
        required:true,
        type:String,
    },
    images:{
        required:true,
        type:Array,
    },
    imdbRating:{
        type:String,
    },
})
module.export =mongoose.model('Data',dataSchema)