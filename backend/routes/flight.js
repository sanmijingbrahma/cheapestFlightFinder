const express = require('express')

// allows to define routes in seperate file
const router = express.Router(); 


router.get('/',(req,res)=>{
    res.json({message:"Fetching all the Flights"});
})

router.post('/',(req,res)=>{
    res.json({message:"Adding a new flight"});
})


module.exports = router;