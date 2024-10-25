const mongoose=require('mongoose')

const adminSchema=new mongoose.Schema({
    
    lastName:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
    }
    
});


const Admin=mongoose.model('admin',adminSchema)

module.exports=Admin;