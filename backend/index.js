const http = require('http');
const fs = require("fs");

const myServer = http.createServer((req, res)=>{
    const log=`${Date.now()}: ${req.url} New req received`;
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case '/':res.end("Home page ")
        }
        res.end("Hello from server")
    })
    console.log("New req ");
    res.end("Hello from server")
})

myServer.listen(3000,()=> console.log("Server started"));
