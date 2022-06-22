import express from "express";
import { createHotel, deleteHotal, getAllHotel, getHotel, updateYourHotel } from "../controllers/hotel.js";
import hotel from "../models/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router()

//CREATE

router.post("/",verifyAdmin,createHotel)

//put

router.put("/:id",verifyAdmin,updateYourHotel)

//delete

router.delete("/:id",verifyAdmin,deleteHotal)

//get
router.get("/:id",getHotel)

//get all hotel

router.get("/",getAllHotel)



export default router