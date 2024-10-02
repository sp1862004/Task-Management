const { Schema, model } = require("mongoose");

const UserSchema= new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    role_id:{
        type:String,
        default:0,
        enum:[0,1,2]
    }
},
{timestamps:true})
const User=model("User",UserSchema)
module.exports=User;