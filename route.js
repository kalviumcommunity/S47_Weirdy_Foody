const express=require("express");
const app=express();
const arr=require("./data.json")

const get=app.get("/get",(req,res)=>{
    res.json(arr)
})

const post=app.post("/post",(req,res)=>{
    arr.push(req.body)
    res.status(201).json(arr)
})
const put=app.put("/put/:id",(req,res)=>{
    id=(req.params.id)-1
    arr.forEach((item)=>{
        if(item.id==id){
            data=req.body
            arr[id]=data
            res.json(data)
        }  
    })
})

const del=app.delete("/delete/:id",(req,res)=>{
    id=(req.params.id)-1
    arr.splice(id,1)
    res.json(arr)
})

module.exports={get,post,put,del}