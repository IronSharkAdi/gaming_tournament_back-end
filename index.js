const express = require('express')
const mongoose = require('mongoose')
const indexRoutes = require('./routes/index.js')
const app = express()
require('dotenv').config()
const port = process.env.PORT 
const mongo = process.env.MONGODB



//Mongodb connection
mongoose.connect(mongo , {
  useNewUrlParser: true, useUnifiedTopology: true
})

//routes
app.use('/' , indexRoutes)




app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})