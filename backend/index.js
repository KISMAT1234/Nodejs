const http = require('http');

const express = require('express');

const app= express()

app.get("/",(req,res)=>{
  res.end("siuuuu")
})

// const myServer = http.createServer(app)
app.listen(3000,()=> console.log("Server started"));
