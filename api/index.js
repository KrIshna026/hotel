import express from "express";
import mongoose from "mongoose";
import autRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import roomRoute from "./routes/rooms.js"
import hotelRoute from  "./routes/hotels.js"
import cookieParser from "cookie-parser";


const app = express()

const connect = async()=>{
try{

    await mongoose.connect(`mongodb+srv://krishna:vamsi22@ecom.xhuom.mongodb.net/?retryWrites=true&w=majority`)
    .then(console.log("connected to the data base"))
}
catch(error){
    throw(error)
}
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")
})

app.use(cookieParser())
app.use(express.json())

app.use("/auth",autRoute)
app.use("/users",userRoute)
app.use("/hotel",hotelRoute)
app.use("/rooms",roomRoute)



app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "somthing went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
    next()
})

app.listen(8000,()=>{
    connect()
    console.log('it is running on port 8000')
})

