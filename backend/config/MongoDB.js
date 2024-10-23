
import mongoose from "mongoose";

// connect to mongoose database
const ConnectToMongoose = async ()=>{
     mongoose.connection.on("connected",()=>{
        console.log("Connected to MongoDB");
    })
 
    await mongoose.connect(`${process.env.MONGODB_URL}/forever-ecommerce-server`);
 

}

export default ConnectToMongoose;


