const mongoose = require('mongoose')


const flightSchema = new mongoose.Schema(
    {
        airline:{
            type: String,
            required:true,
        },
        flightNumber:{
            type:Number,
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
            type:Date,
            required:true,
        },
        arrivalTime:{
            type:Date,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },

    }
);

// a schema to model
const Flight = mongoose.model("Flight",flightSchema);

module.exports = Flight;