const mongoose=require('mongoose')

const VideoSchema=new mongoose.Schema({
    name:String,
    image:String,
    video:String
})

let Video=mongoose.model("Employee",VideoSchema);
module.exports=Video;