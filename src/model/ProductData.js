const mongoose = require('mongoose');
// mongoose.connect("mongodb+srv://Sayoojsnair:Kl10ak2030@cluster0.dwbqydq.mongodb.net/ProductsDB")

require("dotenv").config();
mongoose.connect(process.env.MONGODB_URL)


const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    productID:Number,
    productName:String,
    productCode:String,
    releaseData:String,
    description:String,
    price:Number,
    starRating:Number,
    imageURL:String

});


var ProductData = mongoose.model('products',ProductSchema);

module.exports = ProductData;

