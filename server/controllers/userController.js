import asyncHandler from "express-async-handler"
import User from "../db/models/userModel.js";
import generateToken from "../config/generateToken.js";
import md5 from "md5";

export const registerUser = asyncHandler(async (req, res) => {
    console.log('Requested Resources!')
    const { name, email, password, pic } = req.body;
    console.log(name, email, password, pic)
    if (!(name && email && password)) {
        res.status(400);
        throw new Error("Please Enter All the Fields!");
    }

    const userExists = await User.findOne({
        email: email
    })

    if (userExists) {
        res.status(400);
        throw new Error("User Already Exists!")
    }
    else {
        const user = await User.create({
            name: name,
            email: email,
            password: md5(password),
            pic: pic
        })

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                pic: user.pic,
                token: generateToken(user._id)
            })
        }
        else {
            res.status(400);
            throw new Error('Failed to Create the User!')
        }
    }
})

export const userAuth = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({
        email: email
    })

    if (user) {
        if (user.password === md5(password)) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                pic: user.pic,
                token: generateToken(user._id)
            })
            console.log("sent with 201!")
        }
        else {
            res.status(401)
            throw new Error("Invalid Login Credentials!")
        }
    }
    else {
        res.status(401);
        throw new Error('Invalid Email or Password!')
    }
})


export const allUsers = asyncHandler(async (req, res) => {

    // const keyword = req.query.search?{
    //     $or: [
    //         {name:{$regex: req.query.search ,$options:'i'}},
    //         {email:{$regex:req.query.search,$options:'i'}}
    //     ]
    // }:null; 

    const { name, email } = req.query;
    console.log(name, email);

    const allusers = await User.find({name:{$ne:name}})
    console.log(allusers);
    res.json(allusers);
    
    // if (name && email) {
    //     const user = await User.where('name').equals(name).where('email').equals(email);
    //     console.log(user[0]);
    //     res.send((user[0]))
    // }
    // else if (name) {
    //     const user = await User.where('name').equals(name);
    //     console.log(user[0]);
    //     res.send((user[0]))
    // }
    // else {
    //     const user = await User.where('email').equals(email);
    //     console.log(user[0]);
    //     res.send((user[0]))
    // }
})