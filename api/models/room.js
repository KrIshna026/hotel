import mongoose  from "mongoose";
const schema = mongoose;

const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    price:{
        type:Number,
        required:true,
    
    },
    maxPeople:{
        type:Number,
        required:true
    },
    dec:{
        type:String,
        required:true
    },
    roomNumber:[{numb:Number,unavailableDates:{type:[Date]}}]
   
},{timestamps:true})

export default mongoose.model("Room",RoomSchema)