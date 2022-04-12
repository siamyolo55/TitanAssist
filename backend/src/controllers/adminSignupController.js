// dependencies
const uuid = require('../utils/uuid')
const hashPassword = require('../utils/hash')
const addAdminToDb = require('../../db/addAdminToDb')

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