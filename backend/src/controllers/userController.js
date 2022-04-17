// dependencies
const userAttendance = require('../../db/userAttendance')

exports.userLogin = async (req, res) => {
    await userAttendance.userLogin(req.body)
    res.status(201).json({
        message: 'successful'
    })
}

exports.userLogout = async (req, res) => {
    await userAttendance.userLogout(req.body)
    res.status(201).json({
        message: 'Logout successful'
    })
}

exports.userPause = async (req, res) => {
    await userAttendance.userPause(req.body)
    res.status(201).json({
        message: 'paused'
    })
}

exports.userUnpause = async (req, res) => {
    let start = await userAttendance.userUnpause(req.body)
    
    res.status(201).json({
        start: start
    })
}
