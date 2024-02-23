const http = require('http');

const express = require('express');
const path = require("path");

const app= express()

const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')

app.use(express.json());

app.use("/user",userRoute)
app.use("/",staticRoute);

// app.get("/",(req,res)=>{
//   res.end("siuuuu")
// })

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

// const myServer = http.createServer(app)
app.listen(3000,()=> console.log("Server started"));
