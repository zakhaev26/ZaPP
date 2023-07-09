import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js"


import cors from "cors";
app.use(cors());
app.get('/api/data',(req,res)=>{
    console.log('requested resource by user!');
    res.status(200).send('Hi Mom,This is Backend!');
})

connectDB();

app.listen(process.env.PORT || 4000,()=>{
    console.log('Server live at %d',process.env.PORT)
})