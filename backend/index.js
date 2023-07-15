import express from 'express';
import cors from "cors";
import mongoose from "mongoose"
// generate version of api
const app = express()

// middleware
app.use(express.json());
// helps make api reqs
app.use(cors())

app.listen(3001, () => console.log("server is alive"))