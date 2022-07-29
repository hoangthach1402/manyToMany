const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:String ,
    stock:Number
})

const Product = mongoose.model('Product',productSchema,'Product')   
module.exports = Product