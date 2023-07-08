//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin
import mongoose from "mongoose";

const chatModel = mongoose.Schema({
    chatName:{
        type:String,
        trim:true
    },
    isGroupChat:{
        type :Boolean,
        default:false
    },
    users:[{
        type:mongoose.Schema.Type.ObjectId,
        ref:"User"
    }],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        default:false,
        ref:"User"
    }
},{
    timestamps:true,
});

const Chat = mongoose.Model("Chat",chatModel);

export default Chat;