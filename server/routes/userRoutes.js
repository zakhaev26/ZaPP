import express from "express";
import {registerUser,userAuth,allUsers} from "../controllers/userController.js";
const Router = express.Router();

Router.post('/',registerUser)
Router.post('/login',userAuth);
Router.get('/',allUsers);

export default Router;