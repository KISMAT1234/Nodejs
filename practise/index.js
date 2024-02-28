import express from 'express'
import User from "./models/User.js"
import db from "./connection.js"

const app = express ()

app.use(express.json())

db();



app.post('/cart',(req,res)=>{
    const { name} =  req.body;
    console.log(id,name,email)
    const user = new User({name})
    user.save().then((data)=>{
    res.status(200).json(data)
    }).catch((err)=>{
        res.status(500).json(err);
    })
})
app.listen(8000,()=>{
    console.log("server running 8000")
})



