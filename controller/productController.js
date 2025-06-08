import Product from "../model/productModel.js"

const createProduct = async (req, res) => {
    const { itemName, itemDesc, itemPrice } = req.body
    try {
        if (!itemName || !itemDesc || !itemPrice) {
            return res.status(400).json({ message: 'Please enter all fields' })
        } else {
            const newProduct = await Product.create({ itemName, itemDesc, itemPrice })
            res.status(200).json(newProduct)
        }
    } catch (err) {
        res.status(500).json({ error: "internal server error" })
    }
}


const createManyProducts = async (req, res) => {
    const products = req.body
    try {
        for (let i = 0; i < products.length; i++) {
            const { itemName, itemDesc, itemPrice } = products[i]
            if (!itemName || !itemDesc || !itemPrice) {
                return res.status(400).json({ message: 'Please enter all fields' })
            }
        }
        let createdProducts = await Product.insertMany(products)
        res.status(200).json({ message: `Created ${createdProducts.length} products` })
    } catch (err) {
        res.status(500).json({ error: "internal server error" })
    }
}


const getAllProducts = async (req, res) => {
    try {
        const foundProducts = await Product.find()
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findOneProduct = async (req, res) => {
    const product = req.params.id
    try {
        if(!product){
            res.status(200).json({ message: "Please enter a product name" })
        }
        const foundProducts = await Product.find({itemName: product})
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findByItemName = async (req, res) => {
    const product = req.params.id
    try {
        if(!product){
            res.status(200).json({ message: "Please enter a product name" })
        }
        const foundProducts = await Product.find({itemName: product})
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findPriceLessThan = async (req, res) => {
    const price = req.params.id
    try {
        if(!price){
            res.status(200).json({ message: "Please enter a price" })
        }
        const foundProducts = await Product.find({itemPrice: {$lt: price}})
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findPriceLessThanEqual = async (req, res) => {
    const price = req.params.id
    try {
        if(!price){
            res.status(200).json({ message: "Please enter a price" })
        }
        const foundProducts = await Product.find({itemPrice: {$lte: price}})
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}

const findPriceGreaterThan = async (req, res) => {
    const price = req.params.id
    try {
        if(!price){
            res.status(200).json({ message: "Please enter a price" })
        }
        const foundProducts = await Product.find({itemPrice: {$gt: price}})
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findPriceGreaterThanEqual = async (req, res) => {
    const price = req.params.id
    try {
        if(!price){
            res.status(200).json({ message: "Please enter a price" })
        }
        const foundProducts = await Product.find({itemPrice: {$gte: price}})
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findPriceBetween = async (req, res) => {
    const minPrice = req.params.minPrice
    const maxPrice = req.params.maxPrice
    try {
        if(!minPrice || !maxPrice){
            res.status(200).json({ message: "Please enter a price" })
        }
        const foundProducts = await Product.find({itemPrice: {$gte: minPrice, $lte: maxPrice}})
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findPriceEqual = async (req, res) => {
    const price = req.params.id
    try {
        if(!price){
            res.status(200).json({ message: "Please enter a price" })
        }
        const foundProducts = await Product.find({itemPrice: {$eq: price}})
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findPriceNotEqual = async (req, res) => {
    const price = req.params.id
    try {
        if(!price){
            res.status(200).json({ message: "Please enter a price" })
        }
        const foundProducts = await Product.find({itemPrice: {$ne: price}})
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findProductsIncludes = async (req, res) => {
    const product = req.params.id
    try {
        if(!product){
            res.status(200).json({ message: "Please enter a product name" })
        }
        const foundProducts = await Product.find({itemName: {$regex: product, $options: "i"}})  // case insensitive matching, regex checks if the string contains the product
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findProductsNotIncludes = async (req, res) => {
    const product = req.params.id
    try {
        if(!product){
            res.status(200).json({ message: "Please enter a product name" })
        }
        const foundProducts = await Product.find({itemName: {$not: {$regex: product, $options: "i"}}})  // case insensitive matching, regex checks if the string contains the product
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findProductsStartsWith = async (req, res) => {
    const product = req.params.id
    try {
        if(!product){
            res.status(200).json({ message: "Please enter a product name" })
        }
        const foundProducts = await Product.find({itemName: {$regex: `^${product}`, $options: "i"}})  // case insensitive matching, regex checks if it starts with 
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findProductsEndsWith = async (req, res) => {
    const product = req.params.id
    try {
        if(!product){
            res.status(200).json({ message: "Please enter a product name" })
        }
        const foundProducts = await Product.find({itemName: {$regex: `${product}$`, $options: "i"}})  // case insensitive matching, regex checks if it ends with 
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findProductsNotStartsWith = async (req, res) => {
    const product = req.params.id
    try {
        if(!product){
            res.status(200).json({ message: "Please enter a product name" })
        }
        const foundProducts = await Product.find({itemName: {$not: {$regex: `^${product}`, $options: "i"}}})  // case insensitive matching, regex checks if it doesn't start with 
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


const findProductsNotEndsWith = async (req, res) => {
    const product = req.params.id
    try {
        if(!product){
            res.status(200).json({ message: "Please enter a product name" })
        }
        const foundProducts = await Product.find({itemName: {$not: {$regex: `${product}$`, $options: "i"}}})  // case insensitive matching, regex checks if it doesn't end with 
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}




export default {
    createProduct,
    createManyProducts,
    getAllProducts,
    findOneProduct,
    findByItemName,
    findPriceLessThan,
    findPriceLessThanEqual,
    findPriceGreaterThan,
    findPriceGreaterThanEqual,
    findPriceBetween,
    findPriceEqual,
    findPriceNotEqual,
    findProductsIncludes,
    findProductsNotIncludes,
    findProductsStartsWith,
    findProductsEndsWith,
    findProductsNotStartsWith,
    findProductsNotEndsWith
}