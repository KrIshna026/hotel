import Room from "../models/room.js"
import hotel from "../models/hotel.js"
import { createError } from "../utils/error.js"


export const createRoom = async(req,res,next)=>{

    const hotelId = req.params.hotalid;
    const newRoom = new Room(req.body)

    try{
        const savedRoom = await newRoom.save()
        try{
            await hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom.id}})
        }
        catch(err){
            next(err)
        }
        res.status(200).json(savedRoom)
    }catch(err){
        next(err)
    }

}

export const updateRoom = async(req,res,next)=>{

    
    try{
        const updateRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateRoom)
    }catch(err){
        next(err)
    }
}


export const deleteRoom = async(req,res,next)=>{

    
    try{
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel was deleted")
    }catch(err){
        next(err)
    }
}

export const getRoom = async(req,res,next)=>{

    
    try{
        const Room = await Room.findById(req.params.id)
        res.status(200).json(Room)
    }catch(err){
        next(err)
    }
}

export const getAllRoom = async(req,res,next)=>{
    
    try{
        const Rooms = await Room.find()
        res.status(200).json(Rooms)
    }catch(err){
        next(err)
    }
}