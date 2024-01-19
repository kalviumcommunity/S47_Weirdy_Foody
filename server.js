const express=require("express");
const app=express();

app.get("/ping",(req,res)=>{
    res.send("Weirdy Foody");
})

var server= app.listen(3000);
