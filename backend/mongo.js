const http = require('http');
const mongoose = require("mongoose");

const express = require('express');

const app= express()

const userRouter =require('./routes/user')

app.get("/",(req,res)=>{
  res.end("siuuuu")
})

app.use("/user",userRouter)

// const myServer = http.createServer(app)
app.listen(3000,()=> console.log("Server started"));
