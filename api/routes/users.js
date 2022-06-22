import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";



const router = express.Router()

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user , you have logged in")
})

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello user , you have logged in and you can delete your account")
})

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello Admin , you have logged in and you can delete all account")
})




//put

router.put("/:id",verifyUser,updateUser)

//delete

router.delete("/:id",verifyUser,deleteUser)

//get
router.get("/:id",verifyUser,getUser)

router.get("/",verifyAdmin,getAllUser)



export default router