const express=require("express");
const mongoose= require("mongoose");
const arr=require("./data.json")
const app=express();
const rout=require("./route")
const port=4000


app.use(express.json())

const data='mongodb+srv://aniketg:FOT8yjNAFZj39q0m@cluster0.wikddym.mongodb.net/?retryWrites=true&w=majority'
app.get("/get",rout.get)

app.post("/post",rout.post)

app.put("/put/:id",rout.put)

app.get("/:id",(req,res)=>{
    const tt=req.params.id
    mongoose.connect(data)
    .then(()=>{
        res.json(arr[(tt)-1])})
    .catch((error)=>{
        res.json({message:error,message:"server is not running"})
    })

app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`);
});


module.exports={app}
