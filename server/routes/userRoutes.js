import express from "express";
import {registerUser,userAuth,allUsers} from "../controllers/userController.js";
const Router = express.Router();
import {protect} from "../middlewares/authMiddleware.js";

Router.post('/',registerUser)
Router.post('/login',userAuth);
Router.get('/',protect,allUsers);

export default Router;