import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"
dotenv.config();
import connectDB from "./db/connect.js"
import { notFound,errorHandler } from "./middlewares/errorMiddleware.js";
connectDB();

app.use(notFound);
app.use(errorHandler);

app.use(cors());
app.use(express.json());//to accept JSON Data
app.use('/api/user',userRoutes);



app.listen(process.env.PORT || 4000,()=>{
    console.log('Server live at %d',process.env.PORT)
})