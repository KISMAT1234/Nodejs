const cluster = require("node:cluster");
const express =require('express');
const os = require("os");

const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {
  
    // Fork workers.
    for (let i = 0; i < totalCPUs; i++) {
      cluster.fork({
        PORT:3000 + i
      });
    }
}else{
    const app = express()
    const PORT = process.env.PORT;

    app.get("/",(req,res)=>{
      res.send("hello world")
    })

    app.listen(PORT,()=>{
        console.log(`Server running at port:${PORT}`);
    })
}
