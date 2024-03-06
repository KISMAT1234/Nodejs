const http = require("http")
const express = require("express");
const path = require('path')

const {Server} = require("socket.io");

const app = express()
const server = http.createServer(app);
const io = new Server(server)

// Socket io handling  
io.on("connection",(socket)=>{
    socket.on("chatMessage",(message)=>{
        console.log("A new user Message",message)
        io.emit("message",message)
    })
})

// Socket io handle


app.use(express.static(path.resolve('./public')))

app.get('/',(req,res)=>{
    return res.sendFile("/public/index.html")
})

server.listen(9000, ()=>{
    console.log(`server conected at 9000`)
})



