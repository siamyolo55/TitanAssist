// dependencies
const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    adminId: String,
    adminName: String,
    adminUsername: String,
    adminPassword: String,
    adminCompanyId: String,
    adminCompanyName: String
})

module.exports = mongoose.model("administrators", AdminSchema)