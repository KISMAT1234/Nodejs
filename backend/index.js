const http = require('http');
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res)=>{
    const log=`${Date.now()}: ${req.url} New req received`;
    const myUrl= url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case "/":
            if(req.method === 'GET') res.end("/homepage")
            break;
            case "/about":
            const username = myUrl.query.name;
            res.end(`hii, ${username}`)
            break;
            case "/search":
                const search = myUrl.query.search_query
                res.end("Here are your results for" + search)
                break;
            case "/signup":
                if(req.method === 'GET') res.end('This is a signup form'); 
                 else if(req.method === 'POST') {
                    res.end("success")
                 }
            default:
                res.sendDate("404 not found");
        }
        res.end("Hello from server")
    })
    console.log("New req ");
    // res.end("Hello from server")
})

myServer.listen(3000,()=> console.log("Server started"));
