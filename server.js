const express=require("express");
const app=express();
const post=3000

app.get("/",(req,res)=>{
    res.send("Weirdy Foody");
})

app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`);
});
