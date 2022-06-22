import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/room.js";
import hotel from "../models/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router()

//CREATE

router.post("/:hotelId",verifyAdmin,createRoom)

//put

router.put("/:id",verifyAdmin,updateRoom)

//delete

router.delete("/:id",verifyAdmin,deleteRoom)

//get
router.get("/:id",getRoom)

//get all hotel

router.get("/",getAllRoom)

export default router