const mongoose = require('mongoose')


const flightSchema = new mongoose.Schema(
    {
        airline:{
            type: String,
            required:[true,"Ariline is required."]
        },
        flightNumber:{
            type:String,
            required:[true,"Flight Number is required."],
            unique:[true,"Flight Number should be required."]
        },
        departure:{
            type:String,
            required:[true,"Departure is required."]
        },
        destination:{
            type:String,
            required:[true,"Destination is Required."]
        },
        departureTime:{
            type:String,
            required:[true,"Departure time is required."]
        },
        arrivalTime:{
            type:String,
            required:[true,"Arrival Time is required."],
            validate:{

            function(value){
                return value>this.departureTime;
            },
        message:"Arrival Time should be greater than departure time."
    }

        },
        price:{
            type:Number,
            required:[true,"Price is required."],
            min:[100,"Price must be at least 100"],
        },

    }
);

// a schema to model
const Flight = mongoose.model("Flight",flightSchema);

module.exports = Flight;