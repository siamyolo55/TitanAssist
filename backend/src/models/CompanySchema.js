const mongoose = require('mongoose')
const Employee = require('./EmployeeSchema')

const CompanySchema = new mongoose.Schema({
    companyId: String,
    companyName: String, 
    adminIds: [String],
    employees: [Employee],
    officeHoursTotal: String
})



module.exports = mongoose.model("companies", CompanySchema)