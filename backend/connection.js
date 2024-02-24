const mongoose = require('mongoose')

const connectDB= async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/Auth')
            console.log("MongodB connected");
    } catch(err){
        console.log("Mongodb fail");
        process.exit(1);
    }
}


export default connectDB;
