import express from "express";
const userRoutes = express.Router()
import userController from "../controller/userController.js";

const auth = (req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    res.redirect('/login')
  }
}

userRoutes.get('/', auth, userController.getUserHomePage)  // protected route
userRoutes.post('/register', userController.createNewUser) // public route
userRoutes.post('/login', userController.signInUser)       // public route
userRoutes.get('/login', (req, res)=>{ res.send('login page')})       // public route
userRoutes.get('/logout', (req, res)=>{ req.session.destroy(); res.redirect('/login')})

export default userRoutes;
