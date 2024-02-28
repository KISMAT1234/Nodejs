import mongoose from 'mongoose'

const db = async() =>{
    try{
         await mongoose.connect("mongodb://localhost:27017/practise")
         console.log("Database Connected")
}catch(err){
    console.log("Error Connecting to Database")
}
}

export default db;