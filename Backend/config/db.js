const mongoose = require("mongoose")

const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(
            'mongodb+srv://prajjwalforwork:CollegeHUB007@cluster0.fjux0.mongodb.net/credentialsdb?retryWrites=true&w=majority&appName=Cluster0')
            console.log(`MongoDB connected: ${connect.connection.host}`);     
    }catch(error){
        console.log(error);
        process.exit(1)
    }   
}

module.exports = connectDB