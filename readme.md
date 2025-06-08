Notes
- This part demonstrates the core concepts of building a modular express application with MongoDB integration using Mongoose.
- It covers creating modular route files, connecting to MongoDB using Mongoose, creating Mongoose schemas and models, and using Mongoose models for database operations.
- The code examples and explanations are provided to help you understand the concepts and how to implement them in your own projects.

Directories and files explined:

- `index.js`: The main entry point of the application. It sets up the server and routes.
- `/config`: contains the `db.js` file that connects to the MongoDB database using Mongoose. This folder is also used for storing configuration files.
    - `config/db.js`: Contains the code to connect to the MongoDB database using Mongoose.
- `/routes`: Contains the routing modiles that defines the routes for the application.
    - `adminRoutes.js`: Contains the routing modules for the admin routes.
    - `userRoutes.js`: Contains the routing modules for the user routes.
- `/model`: Contains the Mongoose schema and model files for the application.
    - `productModel.js`: Contains the Mongoose schema and model for the product collection.
    - `userModel.js`: Contains the Mongoose schema and model for the user collection.
- `/controller`: Contains the controller modules for the application.
    - `productController.js`: Contains the controller modules for the product related router handlers.
    - `userController.js`: Contains the controller modules for the user related router handlers.
- `node_modules`: Contains the installed dependencies of the application. (express, mongoose like third party modules are installed here, and we are taking advantage of them in the project)
- `package.json`: Contains the list of dependencies and scripts for the application. We can also decide what type of javascript we want to use in our project (module for es6 or common for es5).

Steps:

1. Create a new folder for your project and navigate to it.
2. Initialize a new node.js project using `npm init -y`.
3. Configure the `package.json` file to use ES6 modules and a start script.
4. Install the required dependencies using `npm install express mongoose`.
5. Create the `index.js` file to set up the server and routes.
    5.1 import express module and create an instance of the Express application.
        ```js
        import express from 'express';
        const app = express();
        ```
    5.2 listen on port 3000 and log a message to the console.
        ```js
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
        ```
    5.3 use express urlencoded and json middleware to parse the request body.
        ```js
        app.use(express.urlencoded());
        app.use(express.json());
        ```
    5.4 import and use the admin and user routes.
        ```js
        import adminRouter from './routes/adminRoutes.js'; // all import statements are at the top
        import userRoutes from './routes/userRoutes.js';

        app.use('/', userRoutes);   // all middleware statements are at the bottom before app.listen
        app.use('/admin/', adminRouter);
        ```
    5.5 import and execute the database connection.
        ```js
        import './config/db.js';    // all import statements are at the top
        ```
6. Create the `routes` folder and the `adminRoutes.js` and `userRoutes.js` files.
    6.1 Create the `adminRoutes.js` file to define the admin routes.
        ```js
        import express from 'express';          // import express so that we can create a router
        const adminRouter = express.Router();   // create a router function called adminRouter, so that we can add routes to it
        
        // define all admin related router handlers here (refer to the adminRoutes.js file)

        export default adminRouter;             // export the router so that we can use it in the main index.js file 
    6.2 Create the `userRoutes.js` file to define the user routes.
        ```js
        import express from 'express';          
        const userRoutes = express.Router();
        
        // define all user related router handlers here (refer to the userRoutes.js file)

        export default userRoutes;
        ```
7. Create the `config` folder and the `db.js` file.
    7.1 Create the `db.js` file to connect to the database.
        ```js
        import mongoose from 'mongoose';

        // connect to the database
        mongoose.connect('mongodb://localhost:27017/emart')
            .then(() => console.log('Database connected'))
            .catch(err => console.log(err));
        ```
8. Create the `model` folder and the `productModel.js` and `userModel.js` files.
    8.1 Create the `productModel.js` file to define the product schema and model.
        ```js
        import mongoose from 'mongoose';    // so that we can use mongoose to create a schema and model

        const productSchema = new mongoose.Schema({
            itemName: {type: String},
            itemDescription: {type: String},
            itemPrice: {type: Number}
        })

        const Product = mongoose.model('Product', productSchema);

        export default Product;             // export the model so that we can use it where ever we want
                                            // we will use this model to create a collection in the database and perform CRUD operations on it. (ex: Product.create(), Product.find(), Product.findById(), Product.update(), Product.delete())
        ```
    8.2 Create the `userModel.js` file to define the user schema and model.
        ```js
        import mongoose from 'mongoose';

        const userSchema = new mongoose.Schema({
            name: {type: String},
            email: {type: String},
            password: {type: String}
        })

        const User = mongoose.model('User', userSchema);

        export default User;                // export the model so that we can use it where ever we want
                                            // we will use this model to create a collection in the database and perform CRUD operations on it. (ex: User.create(), User.find(), User.findById(), User.update(), User.delete())
        ```
9. Create the `controller` folder and the `productController.js`, `adminController.js`, `userController.js` and `pageController.js` files.
    9.1 Create the `productController.js` file to define the product controller.
        ```js
        import Product from '../model/productModel.js';    // import the model so that we can use it in the controller to perform CRUD operations on the collection

        // define and export all product related controller handlers here (refer to the productHandler.js file)
        ```
    9.2 Create the `userHandler.js` file to define the user controller.
        ```js
        import User from '../model/userModel.js';          // import the model so that we can use it in the controller to perform CRUD operations on the collection

        // define and export all user related controller handlers here (refer to the userHandler.js file)
        ```

10. Update the `adminRoutes.js` and `userRoutes.js` files to use the controllers.
    10.1 Update the `adminRoutes.js` file to use the product controller.
        ```js
        // import the product controller
        // eg:
        import pageController from "../controller/pageController.js";   // import the page controller
        import productController from '../controller/productController.js'; // import the product controller

        // add each admin route handler here (refer to the adminRoutes.js file) with the product controller functions we exported from the productHandler.js or userHandler.js file
        // whichever controller function we want to use, we will import it from the productController.js or userController.js file
        
        // all router handlers should be added here

        export default adminRouter;
        ```
    10.2 Update the `userRoutes.js` file to use the user controller.
11. Now we are ready to start sending requests to the server from frontend, postman, rest api or any other tool.
    11.1 Refer and initiate requests using create_requests.http file.
    11.2 Refer and initiate requests using read_requests.http file.
    11.3 Refer and initiate requests using update_requests.http file.
    11.4 Refer and initiate requests using delete_requests.http file.
