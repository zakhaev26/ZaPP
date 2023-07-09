import express from "express";
import {registerUser,userAuth} from "../controllers/userController.js";
const Router = express.Router();

Router.post('/',registerUser)
 
Router.get('/login',userAuth);


export default Router;