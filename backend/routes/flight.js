const express = require('express')

// allows to define routes in seperate file
const router = express.Router(); 


router.get('/',(req,res)=>{
    res.json({message:"Fetching all the Flights"});
})

router.get("/:id",(req,res)=>{
    const flightID = req.params.id;
    res.json({message:`fetching data related to ${flightID}`})
})

router.post('/',(req,res)=>{
    res.json({message:"Adding a new flight"});
})


module.exports = router;