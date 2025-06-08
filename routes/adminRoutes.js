import express from 'express';
const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
    res.send('Admin home page');
});

adminRouter.get('/about', (req, res) => {
    res.send('Admin About Page');
});

adminRouter.get('/contact', (req, res) => {
    res.send('Admin Contact Page');
});

export default adminRouter;