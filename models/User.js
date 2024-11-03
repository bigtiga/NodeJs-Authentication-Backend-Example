const mongoose = require("mongoose");

const mongoSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
       
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,

    },
    password:{
        type:String,
        required:true,

    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"

    }



},{timestamp:true})
const User = mongoose.model("User",mongoSchema);
module.exports = User;