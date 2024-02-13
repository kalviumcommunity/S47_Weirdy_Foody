const express=require("express");
const mongoose= require("mongoose");
const arr=require("./data.json");
const rout=require("./route")
const cors=require('cors')
const dataModel=require("./model.js");
const {validatedata}=require("./newmodel.js");
const jwt=require("jsonwebtoken");

const app=express();
app.use(express.json())
app.use(cors())


mongoose.connect('mongodb+srv://aniketg:FOT8yjNAFZj39q0m@cluster0.wikddym.mongodb.net/?retryWrites=true&w=majority',{
    dbName:"Food_Data"
}).then(()=>{
    console.log("connected")
}).catch((error)=>{
    console.log(error)
})

    app.post("/",(req,res)=>{
        const secret="Aniket"
        const token=jwt.sign({data:req.body},secret,{expiresIn:'3000000'})
        res.send(token)
        // console.log(token)
    })

    app.get('/display',async(req,res)=>{
        await dataModel.find({})
        .then(result=>res.json(result))
        .catch(err => res.json(err))
    })

    app.post('/create',async(req,res)=>{
        const{name,ingrediensts,state,image}=req.body
        const {error}=validatedata(req.body)
        if(error){
            return res.json({data:error.message})
        }

        await dataModel.create(req.body)
        .then(result=>res.json(result))
        .catch(err => console.log(err))
    })

    app.get('/edit/:id',(req,res)=>{
        const id=req.params.id
        //console.log(id)
        dataModel.findById(id)
        .then(result=>res.json(result))
        .catch(err => console.log(err))
    })

    app.put('/update/:id',async(req,res)=>{
        const {id}=req.params
        await dataModel.findByIdAndUpdate(id,req.body)
        .then(result=>res.json(result))
        .catch(err => console.log(err))
    })

    app.delete('/delete/:id',async(req,res)=>{
        const {id}=req.params
        await dataModel.findByIdAndDelete(id)
        .then(result=>res.json(result))
        .catch(err => console.log(err))
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
