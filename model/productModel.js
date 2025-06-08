import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    itemName: {type: String},
    itemDesc: {type: String},
    itemPrice: {type: Number}
})

const Product = mongoose.model('Product', productSchema)

export default Product