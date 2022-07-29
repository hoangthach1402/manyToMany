const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:String ,
    stock:Number
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

productSchema.virtual('comments',{
    ref:'Comment',
    localField:'_id',
    foreignField:'doc'
})

const Product = mongoose.model('Product',productSchema,'Product')   
module.exports = Product