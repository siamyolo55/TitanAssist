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
router.post('/breaklist', userController.userBreaklist)
router.post('/loginStatus', userController.userLoginStatus)

module.exports = router
