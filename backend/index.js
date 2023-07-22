import express from 'express';
import cors from "cors";
import mongoose from "mongoose"
import { userRouter } from "./routes/users.js"
import { recipesRouter } from "./routes/recipes.js"
// require('dotenv').config()


// generate version of api
const app = express()

// middleware
app.use(express.json());
    // helps make api reqs
app.use(cors())
// routes
app.use("/auth", userRouter)
app.use("/recipes", recipesRouter)

// mongoose.connect(process.env.REACT_APP_MONGO_URI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

mongoose.connect("mongodb+srv://admin:rootadmin992@recipes.jpmwwnp.mongodb.net/recipes?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(3001, () => console.log("Server Is Alive"))