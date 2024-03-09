const http = require("http")
const express = require("express");
const path = require('path')

const {Server} = require("socket.io");

const app = express()
const server = http.createServer(app);
const io = new Server(server)

// Socket io handling  
io.on("connection",(socket)=>{
    socket.on("chatMessage",(data)=>{
        // console.log("A new user Message",data)
        io.emit("message",data)
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



