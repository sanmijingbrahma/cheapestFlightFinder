const express = require('express')
const Flight = require('../models/Flight')

// allows to define routes in seperate file
const router = express.Router(); 


router.get('/',async (req,res,next)=>{
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (error) {
        next(error);
    }

})

router.get("/:id",async (req,res,next)=>{
    try {
        const flightNumber = req.params.id;
        const flight = await Flight.findOne({flightNumber:flightNumber});
        res.json(flight);
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


module.exports = router;