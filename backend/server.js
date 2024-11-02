const express = require('express')
const app = express()

const PORT =5000;

app.get("/",(req,res)=>{
    res.send("Welcome My Friendo, Me so happy!")
})


app.listen(PORT,()=>{
    console.log(`Listening at http://localhost:${PORT}`);
    
})