const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    age:Number  
},{
    toJSON:{virtuals:true} ,
    toObject:{virtuals:true}
}
)


userSchema.virtual('orders',{
    ref:'Order',
    localField:'_id',
    foreignField:'user'
})
userSchema.virtual('comments',{
    ref:'Comment',
    localField:'_id',
    foreignField:'doc'
})
const User = mongoose.model('User',userSchema,'User')
module.exports = User