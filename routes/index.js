const Author = require('../models/Author')
const BlogPost = require('../models/BlogPost')
const express = require('express')
const router = express.Router() 
const asyncHandler = require('../utils/async')


router.post('/author',asyncHandler(async (req,res,next)=>{
    const {name} = req.body 
  const author =  await Author.create({name},(err,docauthor)=>{
     console.log(docauthor)
  })
  res.status(201).json(author)
}))

router.get('/author',asyncHandler(async (req,res,next)=>{
    const authors = await Author.find().populate('posts')
    return res.status(200).json(authors)

}))

router.post('/blog',asyncHandler(async (req,res,next)=>{
    const {author,title} = req.body  
    const post = BlogPost.create({author,title}) 
    res.status(201).json(post)   
}))

router.get('/blog',asyncHandler(async (req,res,next)=>{
    const blogs = await BlogPost.find().populate('author','name') 
    res.status(200).json(blogs)
}))

module.exports = router