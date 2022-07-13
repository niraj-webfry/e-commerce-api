require('dotenv').config()
const cors = require('cors')
const express = require('express')
const transactionRouter = require('./Modules/Transaction/Routes/index')

const mongoose = require('mongoose')

//express app
const app = express()

app.use(cors())

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log('Request received:', req.path, req.method)
  next()
})

app.use('/api/transaction', transactionRouter)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT, () => {
      console.log('Server is running on port:', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err.message)
  })
