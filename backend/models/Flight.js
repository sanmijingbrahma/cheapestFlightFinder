const mongoose = require('mongoose')


const flightSchema = new mongoose.Schema(
    {
        airline:{
            type: String,
            required:true,
        },
        flightNumber:{
            type:String,
            required:true,
            unique:true,
        },
        departure:{
            type:String,
            required:true,
        },
        destination:{
            type:String,
            required:true,
        },
        departureTime:{
            type:String,
            required:true,
        },
        arrivalTime:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
            min:[100,"Price must be at least 100"],
        },

    }
);

// a schema to model
const Flight = mongoose.model("Flight",flightSchema);

module.exports = Flight;