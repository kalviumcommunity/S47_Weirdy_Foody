const mongoose=require('mongoose')

const datavelidation=new mongoose.Schema({
    name:String,
    ingrediensts:[String],
    state:String,
    image:String
})

const datamodel=mongoose.model("foods",datavelidation)
module.exports =datamodel