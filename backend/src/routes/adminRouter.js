// dependencies
const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')


// controllers
const adminController = require('../controllers/adminController')


// add controllers to routes
router.get('/', verifyToken, adminController.adminDashboard)
router.post('/login', adminController.adminLogin)
router.post('/signup', adminController.adminSignup)


module.exports = router