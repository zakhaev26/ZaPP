import express from "express";
import registerUser from "../controllers/userController.js";
const Router = express.Router();

Router.post('/',registerUser)
 
// Router.route('/login',userAuth);


export default Router;