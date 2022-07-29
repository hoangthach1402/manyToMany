const mongoose = require('mongoose')    

const orderItem = new mongoose.Schema({
    product:{type:mongoose.Schema.Types.ObjectId,ref:'Product'},
    quantity:Number
})
const orderSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    products:[orderItem]
})

const Order = mongoose.model('Order',orderSchema,'Order')   
module.exports = Order