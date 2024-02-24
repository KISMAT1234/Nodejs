const express = require('express');
const path = require("path");
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')
const connectDB= require('./connection')


const app= express()

app.use(express.json());

app.use("/user",userRoute)
app.use("/",staticRoute);
connectDB()

// app.get("/",(req,res)=>{
//   res.end("siuuuu")
// })

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

// const myServer = http.createServer(app)
app.listen(3000,()=> console.log("Server started"));
