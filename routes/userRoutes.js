import express from "express";
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('User Home Page');
});

userRouter.get('/about', (req, res) => {
    res.send('User About Page');
});

userRouter.get('/contact', (req, res) => {
    res.send('User Contact Page');
});

export default userRouter;