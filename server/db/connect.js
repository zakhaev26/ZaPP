import mongoose from "mongoose";

// const connectDB = async ()=>{
//     try{
//         console.log("Connecting...\n");
//         const connection = await mongoose.connect(process.env.MONGO_URI,{
//             useNewUrlParser:true
//         })

//        console.log(`Database Connected!:${connection.connection.host}`) 
//     }catch(e){
//         console.log(`Error : ${e.message}`);
//         process.exit();
//     }
// }

// export default connectDB

import env from "dotenv";
env.config();
const url =process.env.MONGO_URI;

const connectDB = async()=>{
    try{
        console.log(`${url}`)
        mongoose.connect(url).then(() => { console.log('DB Connect') })
    }catch(e){
        console.log(e.message);
    }
}

export default connectDB