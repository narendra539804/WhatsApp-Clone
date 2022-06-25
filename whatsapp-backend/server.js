const express=require('express');
const mongoose=require('mongoose');

require('dotenv').config();
const app=express();
const port=process.env.PORT || 6060;


mongoose.connect(process.env.DB)
    .then(()=>{ console.log("DB coneected")})
    .catch(console.log("Error while"));


app.get("/",(req,res)=>{
    res.status(200).send("Hello world");
})

app.listen(port,()=>{
    console.log("Hi,I am runnig");
})
