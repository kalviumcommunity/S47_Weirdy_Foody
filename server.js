const express=require("express");
const mongoose= require("mongoose");
const arr=require("./data.json");
const app=express();
const rout=require("./route")
const cors=require('cors')
const Model=require("./model.js");
const { MongoClient } = require("mongodb");


app.use(express.json())
app.use(cors())


const data='mongodb+srv://aniketg:FOT8yjNAFZj39q0m@cluster0.wikddym.mongodb.net/?retryWrites=true&w=majority'
const client=new MongoClient(data,{ useNewUrlParser:true , useUnifiedTopology:true })
client.connect()
.then(()=>{
    console.log("connected")
    const database=client.db('Food_Data')
    const collection=database.collection("Foods")

    app.get('/display',async(req,res)=>{
        const result = await collection.find({}).toArray()
        res.json(result)
    })
}).catch((error)=>{
    console.log(error)
})


// app.get("/get",rout.get)

// app.post("/post",rout.post)

// app.put("/put/:id",rout.put)

// app.delete("/delete/:id",rout.del)

// app.get("/:id",(req,res)=>{
//     const tt=req.params.id
//     .then(()=>{
//         res.json(arr[(tt)-1])})
//     .catch((error)=>{
//         res.json({message:error,message:"server is not running"})
//     })
// })

app.listen(4000, () => {
    console.log(`server is running on PORT: 4000`);
});


module.exports={app}