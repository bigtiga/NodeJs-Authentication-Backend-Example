const mongoose = require("mongoose");
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);


    }catch(e){
        console.error("MongoDB connection failed");
        process.exit(1); 
        
    }
}
module.exports = connectDB;  //export the function to use it in other files