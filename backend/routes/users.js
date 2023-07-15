// auth file
import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { UserModel } from "../models/users.js";

const router = express.Router();

router.post("/register", async (req,res)=>{
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (user){
        return res.json({message: "user already exists"})
    }
    const hashed = await bcrypt.hash(password, 10)

    const newUser = new UserModel({ username, password: hashed })
    await newUser.save()

    res.json({message: "user registered"});
})

router.post("/login")

// exporting more than 1 router
export { router as userRouter}