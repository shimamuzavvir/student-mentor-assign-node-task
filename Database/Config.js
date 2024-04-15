import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const mongoDBConnectionString = process.env.MONGODBCONNECTIONSTRING 

const connectDB = async()=>{
    try {
        console.log("Connection String", mongoDBConnectionString);
        const connection = await mongoose.connect(mongoDBConnectionString)
        console.log("connected to the MongoDB");
        return connection
    } catch (error) {
        console.log(error);
    }

}

export default connectDB