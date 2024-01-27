const express=require("express");
const mongoose= require("mongoose");
const app=express();
const port=3000

<<<<<<< HEAD
const data='mongodb+srv://aniketg:FOT8yjNAFZj39q0m@cluster0.wikddym.mongodb.net/?retryWrites=true&w=majority'

app.get("/",(req,res)=>{
    mongoose.connect(data)
    .then(()=>{
        res.json({message:"server is running"})})
    .catch((error)=>{
        res.json({message:error,message:"server is not running"})
    })
=======
app.get("/",(req,res)=>{
    res.send("Weirdy Foody");
>>>>>>> 09f5d8b9074e8a365044077ba16ca68a04f3d0e8
})

app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`);
});
