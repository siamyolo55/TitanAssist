// dependencies
const uuid = require('../utils/uuid')
const hashPassword = require('../utils/hash')
const addAdminToDb = require('../../db/addAdminToDb')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin = require('../models/AdminSchema')


// export controllers
exports.adminDashboard = async (req, res) => {
    res.json({
        message: 'reached dashboard'
    })
}


exports.adminLogin = async (req, res) => {
    try{
        let loginData = {
            adminUsername: req.body.adminUsername,
            adminPassword: null
        }
        const admin = await Admin.findOne({adminUsername: loginData.adminUsername})
        if(await bcrypt.compare(req.body.adminPassword, admin.adminPassword)){
            loginData.adminPassword = admin.adminPassword
            const token = jwt.sign({_id: admin._id }, process.env.TOKEN_SECRET)
            res.status(200).json({ authToken: token })
            return
        }
        res.status(500).json({
            message: 'wrong password'
        })

    }
    catch(err){
        console.log(err)
    }
    
}

exports.adminSignup = async (req, res) => {
    const hashedPassword = await hashPassword(req.body.adminPassword)

    const adminData = {
        companyName: req.body.companyName,
        companyId: uuid(),
        adminName: req.body.adminName,
        adminUsername: req.body.adminUsername,
        adminPassword: hashedPassword,
        adminId: uuid()
    }

    // add to database
    await addAdminToDb(adminData)

    const dataToSend = {
        companyId: adminData.companyId,
        adminId: adminData.adminId,
        message: 'Sucessful'
    }

    res.status(201).json(dataToSend)
}
