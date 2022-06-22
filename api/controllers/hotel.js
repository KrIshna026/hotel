import { createError } from "../utils/error.js";
import hotel from "../models/hotel.js";

export const createHotel = async(req,res,next)=>{
    const newHotel = new hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err)
    }
}

export const updateYourHotel = async(req,res,next)=>{

    
    try{
        const updateHotel = await hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateHotel)
    }catch(err){
        next(err)
    }
}

export const deleteHotal = async(req,res,next)=>{

    
    try{
        await hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel was deleted")
    }catch(err){
        next(err)
    }
}

export const getHotel = async(req,res,next)=>{

    
    try{
        const hotal = await hotel.findById(req.params.id)
        res.status(200).json(hotal)
    }catch(err){
        next(err)
    }
}

export const getAllHotel = async(req,res,next)=>{
    
    try{
        const hotals = await hotel.find()
        res.status(200).json(hotals)
    }catch(err){
        next(err)
    }
}