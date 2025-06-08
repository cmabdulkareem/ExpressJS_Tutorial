# Lesson 01 - 

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

## Get a home page
```js
app.get('/', (req, res) => {
    res.send('Hello World!')
})
```
## Get a about page
```js
app.get('/about', (req, res) => {
    res.send('About Page')
})
```


## 🧰 Prerequisites

Before you begin, make sure you have:

- [Node.js](https://nodejs.org/) installed (v14+)
- A code editor like [VS Code](https://code.visualstudio.com/)
- Basic to intermediate level knowledge of JavaScript
- es6 knowledge will be an added advantage

---

## 📦 Step 1: Initialize the Project with a start script

1. Create a project folder and open it in your code editor (VS Code).
2. command `npm init -y` to initialize the project with package.json.
    2.1 we can also use `npm init` for interactive mode where you can answer questions about your project.
    2.2 `npm init -y` is a shortcut for `npm init --yes` where you can skip the interactive mode.
3. Configure the `package.json` file:
    - Add `"type": "module"` to the `package.json` object. (for ES6)
    - Add a script to start the server:
        ```json
        "scripts": {
            "start": "nodemon index.js"     // where index.js is your server file
        }
        ```

## 📦 Step 2: Install Express

1. Install Express using `npm install express` or `npm i express`

## 📦 Step 3: Create a Server File

1. Create a file called `index.js` in the root directory of your project.
2. Add the following code to the `index.js` file:
    ```
    import express from 'express';
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(3000, () => {
        console.log('Server started on port 3000');
    })
    ```
    - The `import express from 'express';` statement imports the Express module and assigns it to the `express` variable.
    - The `const app = express();` statement creates an instance of the Express application and assigns it to the `app` variable.
    - The `app.get('/', (req, res) => {...}` statement defines a route for the root URL ('/'). When a request is made to the root URL, the callback function is executed.
    - The `res.send('Hello World!');` statement sends a response with the text 'Hello World!' to the client.
    - The `app.listen(3000, () => {...}` statement starts the server on port 3000 and logs a message to the console when the server starts.

## 📦 Step 4: Test the created server

1. Run the server using `npm run start` // it came from `package.json`
2. Test the server by:
    - Open your browser and navigate to `http://localhost:3000`
    - You should see the message 'Hello World!' in the browser.
    - We can also install vscode RESTClient extension and use it to test our API.
    - After installing the extension, create a request file `request.http` and use it to test our API.
        ```
        GET http://localhost:3000
        ```