const express = require("express")

const {handleUserSignup} = require('../controllers/user')

const router = express.Router()

router.post("/user",handleUserSignup)

module.exports = router;

