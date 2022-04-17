const mongoose = require('mongoose')
const Employee = require('./EmployeeSchema')

const TeamSchema = new mongoose.Schema({
    teamId: String,
    teamLead: Employee,
    teamMembers: [Employee],
    tasks:[{
        taskId: String,
        taskLead: Employee,
        taskMembers: [Employee]
    }]
})

module.exports = TeamSchema
