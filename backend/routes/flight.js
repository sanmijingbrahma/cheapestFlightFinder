const express = require('express')
const Flight = require('../models/Flight')

// allows to define routes in seperate file
const router = express.Router(); 

// Get all the flights
router.get('/',async (req,res,next)=>{
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (error) {
        next(error);
    }

})

// Find flight based on flight number
router.get("/:id",async (req,res,next)=>{
    try {
        const flightNumber = req.params.id;
        const flight = await Flight.findOne({flightNumber:flightNumber});
        res.json(flight);
    } catch (error) {
       next(error);
    }
})

// update flight by flightNumber
router.put("/:flightNumber",async (req,res,next)=>{
    try {
        const updatedFlight = await Flight.findOneAndUpdate({flightNumber:req.params.flightNumber},req.body,{new:true,runValidators:true});
        if(!updatedFlight){
            res.status(404).json({message:"Flight not Found"})
        }else{
            res.json(updatedFlight);
        }
    } catch (error) {
       next(error); 
    }
})

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


router.delete("/:id",async(req,res,next)=>{
    try {
        const deletedFlight = await Flight.findOneAndDelete({flightNumber:req.params.id});
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