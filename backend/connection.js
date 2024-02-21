mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{
    console.log("Mongo Error", err);
})