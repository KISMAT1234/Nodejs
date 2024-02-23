const express = require('express');

const router = express.Router()

router.get("/signup",(req,res)=>{
    return res.render("signup")
});

module.exports = router