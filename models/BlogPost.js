const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    author:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'Author'} ,
    title:{type:String,requied:true},
    comments:[
       {author: {type:mongoose.Schema.Types.ObjectId,required:true,ref:'Author'},
        content:{type:String}}
    ]
})

const BlogPost = mongoose.model('BlogPost',blogSchema,'BlogPost') 
module.exports = BlogPost