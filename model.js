const mongoose=require('mongoose')

const datavelidation=new mongoose.Schema({
    name:String,
    ingredients:Array,
    state:String,
    image:String
})

const datamodel=mongoose.model("Foods",datavelidation)
module.exports =datamodel   