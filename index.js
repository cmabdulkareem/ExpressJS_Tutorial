import express from "express";
import adminRouter from "./routes/adminRoutes.js";
import {authMiddleware} from "./middlewares/auth.js";
const app = express();

app.use(authMiddleware);

app.use((req, res, next) => {
    console.log('Middleware is running');
    next(); // Pass control to the next middleware or route handler. Here it's the adminRouter
})

app.use('/admin', adminRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});