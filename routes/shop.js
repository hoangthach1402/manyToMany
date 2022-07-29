// const mongoose = require('mongoose')
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const Comment = require('../models/Comment')
const asyncHandler = require("../utils/async");

router.get(
  "/users",
  asyncHandler(async (req, res, next) => {
    const users = await User.find().populate({
      path: "orders",
      populate: { path: "products", populate: { path: "product" } },
    }).limit(10);
    res.json(users);
  })
);
//get user By Id
router.get(
  "/users/:id",
  asyncHandler(async (req, res, next) => {
      const user = await User.findById(req.params.id).populate({path:'orders',populate:{path:'products',populate:{path:'product'}}})  
    res.json(user)
    })
);
//get user with comment     
router.get('/usersrate/:id',asyncHandler(async(req,res,next)=>{
   const user = await User.findById(req.params.id).populate({path:'comments',populate:{path:'user'}}) 
   res.json(user)
}))
router.get(
  "/products",
  asyncHandler(async (req, res, next) => {
    const products = await Product.find();
    res.json(products);
  })
);
router.get(
  "/orders",
  asyncHandler(async (req, res, next) => {
    const orders = await Order.find().populate({
      path: "products",
      populate: { path: "product" },
    });
    res.json(orders);
  })
);
router.get('/products/:id',asyncHandler(async(req,res,next)=>{
    const product = await Product.findById(req.params.id).populate({path:'comments',populate:{path:'user',select:'name'},select:'title'})
    res.json(product)
}))
router.post(
  "/users",
  asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);
    res.json(user);
  })
);
router.post(
  "/products",
  asyncHandler(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.json(product);
  })
);
router.post(
  "/orders",
  asyncHandler(async (req, res, next) => {
    const { products, user } = req.body;
    const order = await Order.create({ user, products });
    for (var i = 0; i < products.length; i++) {
      const product = await Product.findById(products[i].product);
      product.stock = product.stock - products[i].quantity;
      await product.save();
    }
    res.json(order);
  })
);

router.get('/comments',asyncHandler(async (req,res,next)=>{
    const comment = await Comment.find()
}))
router.post('/comments',asyncHandler(async (req,res,next)=>{
   const {doc,docModel,title,user} =req.body ;
//    console.log('doc docmodel title',doc,docModel,title)   
    const comment = await Comment.create({title,doc,docModel,user})
    res.json(comment)
}))





module.exports = router;
