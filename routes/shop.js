// const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Order = require('../models/Order')
const Product = require('../models/Product')
const User = require('../models/User')
const asyncHandler = require('../utils/async')

router.get('/users',asyncHandler(async (req,res,next)=>{
    const users = await User.find().populate({path:'orders',populate:{path:'products',populate:{path:'product'}}})
    res.json(users)
    }))
router.get('/products',asyncHandler(async (req,res,next)=>{
    const products = await Product.find()
    res.json(products)
}))
router.get('/orders',asyncHandler(async (req,res,next)=>{
        const orders = await Order.find().populate({path:'products',populate:{path:'product'}})
    res.json(orders)
    }))


router.post('/users',asyncHandler(async (req,res,next)=>{
    const user = await User.create(req.body)
    res.json(user)
}))
router.post('/products',asyncHandler(async (req,res,next)=>{
    const product = await Product.create(req.body)
    res.json(product)
}))
router.post('/orders',asyncHandler(async (req,res,next)=>{
    const {products,user} = req.body
    // console.log('product: ',products)
    const order = await Order.create({user,products})
    res.json(order)
    }))

module.exports = router     