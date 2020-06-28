const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// import router
const authRoute = require('./routes/auth')

dotenv.config()

// connect to DB
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }, () =>
  console.log('connected to DB')
)

// Middleware
app.use(express.json()) // body parser

// route middleware
app.use('/api/user', authRoute)
app.use((req, res) => console.log('a'))

app.listen(3000, () => {
  console.log('server running')
})
