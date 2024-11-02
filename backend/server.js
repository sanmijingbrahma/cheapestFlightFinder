const express = require('express')
const app = express()
const flightRoutes = require('./routes/flight');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const PORT =5000;

// Middleware to parse json files
app.use(express.json())
app.use(logger);
app.use(errorHandler)

// use the flightRoutes when the request is to "/api/flights"
app.use('/api/flights',flightRoutes);

app.get("/",(req,res)=>{
    res.send("Welcome My Friendo, Me so happy!")
})


app.listen(PORT,()=>{
    console.log(`Listening at http://localhost:${PORT}`);
    
})