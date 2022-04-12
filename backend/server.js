// dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()


// routers
const adminRouter = require('./src/routes/adminRouter')


// initialize app
const app = express()
app.use(express.json())
app.use(cors())


// constants
const PORT = process.env.PORT || 4001
const DB = process.env.MONGOOSE_CONNECT


// connect to db
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// routes
app.use('/admin', adminRouter)


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

