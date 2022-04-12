// dependencies
const express = require('express')
const router = express.Router()


// controllers
const adminController = require('../controllers/adminController')


// add controllers to routes
router.post('/login', adminController.adminLogin)
router.post('/signup', adminController.adminSignup)


module.exports = router