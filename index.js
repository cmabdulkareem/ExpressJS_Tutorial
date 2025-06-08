import express from "express";
import adminRouter from "./routes/adminRoutes.js";
const app = express();


app.use('/admin', adminRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});