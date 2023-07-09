import asyncHandler from "express-async-handler"
import User from "../db/models/userModel.js";

const registerUser = asyncHandler(async (req,res) =>{

    const {name , email,password,pic} = req.body;

    if(!(name&&email&&password)){
        res.status(400);
        throw new Error("Please Enter All the Fields!");
    }

    const userExists = await User.findOne({
        email:email
    })

    if(userExists)
        {
            res.status(400);
            throw new Error("User Already Exists!")
        }
    else{
        const user = await User.create({
            name:name,
            email:email,
            password:password,
            pic:pic
        })

        if(user){
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                pic:user.pic,
                token:generateToken(user._id)
            })
        }
        else{
            res.status(400);
            throw new Error('Failed to Create the User!')
        }
    }
})

export default registerUser