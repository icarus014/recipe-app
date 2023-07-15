import express from 'express';
import cors from "cors";
import mongoose from "mongoose"
import { userRouter } from "./routes/users.js"


// generate version of api
const app = express()

// middleware
app.use(express.json());
    // helps make api reqs
app.use(cors())
app.use("/auth", userRouter)

mongoose.connect("mongodb+srv://admin:rootadmin992@recipes.jpmwwnp.mongodb.net/recipes?retryWrites=true&w=majority")

app.listen(3001, () => console.log("Server Is Alive"))