// dependencies
const uuid = require('../utils/uuid')
const hashPassword = require('../utils/hash')
const addAdminToDb = require('../../db/addAdminToDb')
const bcrypt = require('bcrypt')
const Admin = require('../models/AdminSchema')

// export controllers

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

    console.log(adminData)

    const dataToSend = {
        companyId: adminData.companyId,
        adminId: adminData.adminId,
        message: 'Sucessful'
    }

    res.status(201).json(dataToSend)
}

exports.adminLogin = async (req, res) => {
    try{
        let loginData = {
            adminUsername: req.body.adminUsername,
            adminPassword: null
        }
        const admin = await Admin.find({adminUsername: loginData.adminUsername})
        if(bcrypt.compare(req.body.adminPassword, admin[0].adminPassword)){
            loginData.adminPassword = admin[0].adminPassword
            res.status(201).json({
                message: 'login successful'
            })
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