const mongoose = require('mongoose')


const AttendanceSchema = new mongoose.Schema({
    employeeId: String,
    loggedIn: Boolean,
    timesheet:[
        {
            startTime: String,
            endTime: String,
            breaks:[
                {
                    start: String,
                    end: String
                }
            ]
        }
    ]
})

module.exports = mongoose.model("attendance", AttendanceSchema)