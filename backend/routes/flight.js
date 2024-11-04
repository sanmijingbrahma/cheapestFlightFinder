const express = require('express')
const Flight = require('../models/Flight')

// allows to define routes in seperate file
const router = express.Router(); 

// list all the flights
router.get('/',async (req,res,next)=>{
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (error) {
        next(error);
    }

})

// get a flight by id
router.get("/:id",async (req,res,next)=>{
    try {
        const flightNumber = req.params.id;
        const flight = await Flight.findOne({flightNumber:flightNumber});
        res.json(flight);
    } catch (error) {
       next(error);
    }
})

// Update a flight
router.put("/:id",async (req,res,next)=>{
    try {
        const updatedFlight = await Flight.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if(!updatedFlight){
            res.status(404).json({message:"Flight not Found"})
        }else{
            res.json(updatedFlight);
        }
    } catch (error) {
       next(error); 
    }
})

// Add a new flight
router.post('/',async (req,res,next)=>{
    try {
        const flightData = req.body;
        const newFlight = new Flight(flightData);
        const savedFlight = await newFlight.save();
        res.status(201).send(savedFlight);
    } catch (error) {
        next(error);
    }
})

// route to delete a flight based on it's id
router.delete("/:id",async(req,res,next)=>{
    try {
        const deletedFlight = await Flight.findByIdAndDelete(req.params.id);
        if(!deletedFlight){
            res.status(404).json({message:"Flight not Found."})
        }else{
            res.json(deletedFlight);
        }
    } catch (error) {
       next(error); 
    }
})


// Route to get all the flight less then specified price
router.get("/:price", async(req,res,next)=>{
    try {
        const price = req.params.price;
        const belowPrice = await Flight.find({price:{$lt:price}})
        if(!belowPrice){
            res.status(404).json({message:"No Fligh Found."})
        }else{
            res.json(belowPrice);
        }
    } catch (error) {
       next(error); 
    }
})


module.exports = router;