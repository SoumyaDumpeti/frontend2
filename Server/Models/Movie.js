
const mongoose=require('mongoose')


const movieSchema=new mongoose.Schema({
    image:{
        type:String,
    },
    movieName:{
        type:String,
        required:true,
    },
    theatreName:{
        type:String,
        required:true
    },
    totalTickets:{
         type:Number,
         required:true
    },
    availableTickets:{
         type:Number,
         mimimum:0
    },
    price:{
        type:Number,
         required:true
    },
    status:{
        type:String,
        default:'BOOK ASAP'
    }
})

movieSchema.index({
    movieName:1,
    theatreName:1,
    unique:true
})

//create model(class) for that userSchema
const Movie=mongoose.model('movie',movieSchema)

//export user model
module.exports=Movie;