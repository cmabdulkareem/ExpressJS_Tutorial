import express from "express";
const userRoutes = express.Router()
import userController from "../controller/userController.js";


userRoutes.get('/', userController.getUserHomePage)
userRoutes.post('/register', userController.createNewUser)
userRoutes.post('/login', userController.signInUser)



export default userRoutes;