import mongoose from 'mongoose'
let userSchema=mongoose.Schema({
     name:String
})

const User = mongoose.model("User",userSchema)

export default User; 