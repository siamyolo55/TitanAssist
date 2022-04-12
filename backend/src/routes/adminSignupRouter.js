// dependencies
const express = require('express')
const router = express.Router()


// controllers
const adminSignupController = require('../controllers/adminSignupController')


// add controllers to routes
router.post('/', adminSignupController.adminSignup)


module.exports = router