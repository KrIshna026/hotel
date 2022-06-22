import hotel from "../models/hotel.js";
import User from "../models/User.js";



export const updateUser = async(req,res,next)=>{

    
    try{
        const updateuser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateuser)
    }catch(err){
        next(err)
    }
}

export const deleteUser = async(req,res,next)=>{

    
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel was deleted")
    }catch(err){
        next(err)
    }
}

export const getUser = async(req,res,next)=>{

    
    try{
        const hotal = await User.findById(req.params.id)
        res.status(200).json(hotal)
    }catch(err){
        next(err)
    }
}

export const getAllUser = async(req,res,next)=>{
    
    try{
        const hotals = await User.find()
        res.status(200).json(hotals)
    }catch(err){
        next(err)
    }
}