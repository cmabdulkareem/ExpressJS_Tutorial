import express, { application } from "express";
import pageController from "../controller/pageController.js";
import productController from '../controller/productController.js';
const adminRouter = express.Router()

adminRouter.get('/', pageController.getAdminPage)                                   // to access admin homepage (dashboard)
adminRouter.get('/products', pageController.getProductsPage)                        // to access products page

adminRouter.post('/products/addaproduct', productController.createProduct)          // to create a single product
adminRouter.post('/products/createmany', productController.createManyProducts)      // to create multiple products

adminRouter.get('/products/getallproducts', productController.getAllProducts)       // to get all products
adminRouter.get('/products/findone/:id', productController.findOneProduct);         // to find a single product
adminRouter.get('/products/byname/:itemName', productController.findByItemName);    // to find all products with specific field value

adminRouter.get('/products/pricelt/:maxPrice', productController.findPriceLessThan);    // to find all products with price less than a given value
adminRouter.get('/products/pricelte/:maxPrice', productController.findPriceLessThanEqual); // to find all products with price less than or equal to a given value
adminRouter.get('/products/pricegt/:minPrice', productController.findPriceGreaterThan); // to find all products with price greater than a given value
adminRouter.get('/products/pricegte/:minPrice', productController.findPriceGreaterThanEqual); // to find all products with price greater than or equal to a given value 
adminRouter.get('/products/pricebetween/:minPrice/:maxPrice', productController.findPriceBetween);  // to find all products with price between two given values
adminRouter.get('/products/priceeq/:price', productController.findPriceEqual);         // to find all products with price equal to a given value
adminRouter.get('/products/priceneq/:price', productController.findPriceNotEqual);     // to find all products with price not equal to a given value

adminRouter.get('/products/findProducts/includes/:id', productController.findProductsIncludes);    // to find all products with a specific string contained in ther any specific field value (e.g., itemName contains "apple")
adminRouter.get('/products/findProducts/notincludes/:id', productController.findProductsNotIncludes);   // to find all products with a specific string not contained in ther any specific field value (e.g., itemName not contains "apple")
adminRouter.get('/products/findProducts/startswith/:id', productController.findProductsStartsWith);    // to find all products where a field value starts with a specific string (e.g., itemName starts with "apple")
adminRouter.get('/products/findProducts/endswith/:id', productController.findProductsEndsWith);    // to find all products where a field value ends with a specific string (e.g., itemName ends with "apple")
adminRouter.get('/products/findProducts/notstartswith/:id', productController.findProductsNotStartsWith);   // to find all products where a field value does not start with a specific string (e.g., itemName doesn't start with "apple")
adminRouter.get('/products/findProducts/notendswith/:id', productController.findProductsNotEndsWith);   // to find all products where a field value does not end with a specific string (e.g., itemName doesn't end with "apple")

export default adminRouter;