const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MonogDB Connected Successfully!");
        
    } catch (error) {
        console.error(`MongoDB Connection Faliled${error.message}`);
        process.exit(1);
        
    }
}

module.exports = connectDB;