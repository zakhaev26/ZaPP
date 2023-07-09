import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        console.log("Connecting...\n");
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true
        })

       console.log(`Database Connected!:${connection.connection.host}:${connection.connection.port}`) 
    }catch(e){
        console.log(`Error : ${e.message}`);
        process.exit();
    }
}

export default connectDB