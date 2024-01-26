const express=require("express");
const mongoose= require("mongoose");
const app=express();
const port=3000

const data='mongodb+srv://aniketg:FOT8yjNAFZj39q0m@cluster0.wikddym.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(data)
.then(()=>{
    try {
        app.get("/",(req,res)=>{
            res.json({message:"server is running"})
        })
    } catch (error) {
        app.get("/",(req,res)=>{
            res.json({message:error,message:"server is not running"})
        })
    }
})

app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`);
});