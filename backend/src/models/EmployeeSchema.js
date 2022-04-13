const mongoose = require('mongoose')
const Team = require('./TeamSchema')

const EmployeeSchema = new mongoose.Schema({
    employeId: String,
    employeeName: String,
    employeeDOB: String,
    employeeContact: String,
    teamsPartOf: [Team]
})

module.exports = EmployeeSchema