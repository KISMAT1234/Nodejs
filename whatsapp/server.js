const express = require('express')
const { join } = require('node:path');

const app = express()

const http = require('http').createServer(app)


http.listen(8000, ()=>{
    console.log(`server running at 8000`)

})


app.get('/', (req, res)=>{
    res.sendFile(join(__dirname, 'index.html'));
})