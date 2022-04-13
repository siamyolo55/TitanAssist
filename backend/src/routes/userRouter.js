// dependencies
const express = require('express')
const router = express.Router()


// controllers
const userController = require('../controllers/userController')


// add controllers to routes
router.post('/login', userController.userLoginController)

module.exports = router
