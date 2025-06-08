# Lesson 01 - Route Handlers

Welcome to the Lesson 01 session in our **Express.js tutorial series**. This lesson introduces route handlers, explains why it's useful, and walks you through setting up route handlers.

---

## 🚀 What is Route handler?

In Express, a router handler is a function (or set of functions) that defines how to respond to specific HTTP requests made to a particular path.
```
app.get('/', (req, res) => {
    res.send('Hello World!')
})
```
- `app` : Your Express app
- `get` : HTTP get method
    - Typing a URL in the browser address bar will trigger the `get` method.
    - Clicking on a link will trigger the `get` method.
    - Refreshing the page will trigger the `get` method.
    - By default, the `get` method is used for all HTTP requests.
    - By submitting a form, get method can also be is used. (but not recommended)
- `'/'` : the route path, can be reached by typing `http://localhost:3000/` in the address bar.
- `(req, res) => {}` : the callback function, it's a function that will be executed when the `get` method is triggered.
    - `req` : the request object, it contains information about the incoming request, such as the URL, headers, and body.
    - `res` : the response object, it contains methods for sending the response, such as `send`, `json`, and `status`.

## 🔍 How to use?

### To get a home page
```js
app.get('/', (req, res) => {
    res.send('Hello World!')
})
```
### To get a about page
```js
app.get('/about', (req, res) => {
    res.send('About Page')
})
```
### To get a contact page
```js
app.get('/contact', (req, res) => {
    res.send('Contact Page')
})
```

## 📝 How to implement

1. Directly in the `index.js` file (main file)
    ```
    import express from "express";
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.get('/about', (req, res) => {
        res.send('About Page');
    });

    app.get('/contact', (req, res) => {
        res.send('Contact Page');
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
    ```
2. In a separate file (separate file as a module) - refer next lesson_02

## 🎉 Next lesson
[Lesson 02 - Routing Module](https://github.com/cmabdulkareem/ExpressJS_Tutorial/tree/lesson_02)

## Checking each route handler

1. Run the server (in not running) `npm run start`
2. Open a browser and type `http://localhost:3000/` or `http://localhost:3000/about` or `http://localhost:3000/contact`
    - We can also initiate GET request from a RESTClient script (Refer file request.http)
    - We should see `Hello World!` or `About Page` or `Contact Page`