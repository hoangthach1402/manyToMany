const mongoose = require('mongoose')
const express = require('express')  
const bodyParser = require('body-parser')
const asyncHandler = require('./utils/async')
const {Schema} = require('mongoose')
const indexRouter = require('./routes/index')
const shopRouter = require('./routes/shop')
const app = express()



app.use(bodyParser())
mongoose.connect('mongodb+srv://hoangthach1402:hoangthach123@cluster0.mmtet.mongodb.net/virtualmodel?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true,
})


app.use('/',[indexRouter,shopRouter])

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
  

app.listen(3000,()=>{
    console.log('server is running')
})


