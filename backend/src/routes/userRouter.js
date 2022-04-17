// dependencies
const express = require('express')
const router = express.Router()


// controllers
const userController = require('../controllers/userController')


// add controllers to routes
router.post('/login', userController.userLogin)
router.post('/logout', userController.userLogout)
router.post('/pause', userController.userPause)
router.post('/unpause', userController.userUnpause)

module.exports = router
