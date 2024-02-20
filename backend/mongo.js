const http = require('http');
const mongoose = require("mongoose");

const express = require('express');

const app= express()

mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{
    console.log("Mongo Error", err);
})

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
       
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    }
})

const User = mongoose.model("user", userSchema);

app.get("/",(req,res)=>{
  res.end("siuuuu")
})

// const myServer = http.createServer(app)
app.listen(3000,()=> console.log("Server started"));
