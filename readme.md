# Lesson 03 - Middlewares

Welcome to the Lesson 03 session in our **Express.js tutorial series**. This lesson introduces middlewares, explains why it's useful, and walks you through setting up middlewares.

---

## 🚀 What is Middlewares?

In Express, a middleware is a function that is executed between the request and the response.
- It can be used to perform tasks such as authentication, error handling, logging, and more.
- There are two types of middlewares:
    - **Global middlewares**: These middlewares are executed for every request.
    - **Route middlewares**: These middlewares are executed for specific routes.

## 📚 How to create a middleware?

1. Creating and using a global middleware
```
app.use((req, res, next) => {
    console.log('Global Middleware');
    next(); // Pass control to the next middleware or route handler
});
```
- in this example the middleware will be executed for every request and will log a message to the console then pass request to the next middleware or route handler.

2. Creating and using a route middleware
```
const isAdmin = false
app.use('/admin', (req, res, next) => {
    if (isAdmin) {
        next(); // Pass control to the next middleware or route handler
    } else {
        res.send('You are not authorized to access this page');
    }
});
```

## 🔍 How to use?

// Refer index.js


## 📝 Setting middlewares as modules?

1. Create a new folder `middlewares` in the root directory of the project.
2. Create a new file `auth.js` in the `middlewares` folder.
    - In this file, you can define your middleware functions.
    ```
    const isAdmin = false
    export const authMiddleware = (req, res, next) => {
        if (isAdmin) {
            next(); // Pass control to the next middleware or route handler
        } else {
            res.send('You are not authorized to access this page');
        }
    }
    ```
3. Import the middleware module in the `index.js` file.
    - `import {authMiddleware} from "./middlewares/auth.js";`
5. Use the middleware in the Express app by calling `app.use(authMiddleware)` in the `index.js` file.

## Checking middlewares

1. Run the server (in not running) `npm run start`
2. Open a browser and type `http://localhost:3000/admin/` or `http://localhost:3000/admin/about` or `http://localhost:3000/admin/contact`
    - We can also initiate GET request from a RESTClient script (Refer file request.http)