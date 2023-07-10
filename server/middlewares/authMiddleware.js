import jwt from "jsonwebtoken";
import User from "../db/models/userModel.js";
import asyncHandler from "express-async-handler";

export const protect = asyncHandler(async (req, res, next) => {
    let token;

    console.log(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            //decodes token id
            const decoded = jwt.verify(token, process.env.JWT_SECRET_ACCESS_KEY);
            req.user = await User.findById(decoded.id).select("-password"); 
            next()
        }catch(e){
            // console.log(e)
            console.log(`Token : ${token}`)
            res.status(401);
            throw new Error('Not Authorized , No Token')
        }
    }
    else{
        res.json({"Error":"Unable to verify Token-INV404"});
    }
}) 