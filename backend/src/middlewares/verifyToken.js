const jwt = require('jsonwebtoken')
require('dotenv').config()
const jwtDecode = require('jwt-decode')

const verifyToken = async (req, res, next) => {
    const token = req.header('auth-token')
    if(!token){
        res.json({ authenticated: false })
        return
    }
    try{
        const decoderToken = jwtDecode(token)
        if(!decoderToken){
            res.json({ authenticated: false })
            return
        }
        next()
    }
    catch(err){
        res.status(500).json({ authenticated: false })
    }
}

module.exports = verifyToken