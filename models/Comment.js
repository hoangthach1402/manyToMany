const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    title:String ,
    doc:{
       refPath:'docModel',
       type:mongoose.Schema.Types.ObjectId,
       required:true 
    },
    docModel:{
        type:String,
        required:true,
        enum:['Product','User']
    }
})

const Comment = mongoose.model('Comment',commentSchema,'Comment')
module.exports = Comment 