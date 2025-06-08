# Lesson 02 - Route Handlers (using routing modules)

Welcome to the Lesson 02 session in our **Express.js tutorial series**. This lesson introduces routing module, explains why it's useful, and walks you through setting up routing module.

---

## 🚀 What is Routing module?

In Express, a routing module is a collection of route handlers that are used to handle different HTTP requests. It's a way to group related routes together and manage their behavior.

## 📚 How to create a routing module?

1. Create a folder named `routes` in the root folder.
2. Create a file named `adminRoutes.js` in the `routes` folder.
    - `adminRoutes.js` will contain the route handlers for the admin related routes.
    - we can also create a file named `userRoutes.js` in the `routes` folder for all user related routes.
3. Writing the route handlers in `adminRoutes.js`
```
import express from "express";
const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
    res.send('Admin Home Page');
});

adminRouter.get('/about', (req, res) => {
    res.send('Admin about Page');
})

adminRouter.get('/contact', (req, res) => {
    res.send('Admin contact Page');
})

export default adminRouter;
```
- `adminRouter` is the routing module that's why we are assigning router function to it.
- This newly created routing module should be imported in `index.js`, then only these route handlers will be accessible.

## 🔍 How to use?

1. Import the routing module in `index.js`
```
import adminRouter from "./routes/adminRoutes.js";
```
2. Use the routing module in `index.js`
```
app.use('/admin', adminRouter);
```
3. This will make all the admin route handlers accessible at `/admin/` (refer `index.js`)

## Checking each route handler

1. Run the server (in not running) `npm run start`
2. Open a browser and type `http://localhost:3000/admin/` or `http://localhost:3000/admin/about` or `http://localhost:3000/admin/contact`
    - We can also initiate GET request from a RESTClient script (Refer file request.http)