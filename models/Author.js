const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
   
    name:{type:String}
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})




  AuthorSchema.virtual('posts', {
    ref: 'BlogPost',
    localField: '_id',
    foreignField: 'author'
  });
  
  const Author = mongoose.model('Author', AuthorSchema, 'Author');
  module.exports = Author