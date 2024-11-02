const errorHandler = (err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({messege:'An error occured!', error: err.messege})
    
}
module.exports = errorHandler;