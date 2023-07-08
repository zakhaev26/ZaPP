import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT || 4000,()=>{
    console.log('Server live at %d',process.env.PORT)
})