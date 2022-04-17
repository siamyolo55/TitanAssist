// dppendencies
const Attendance = require('../src/models/AttendanceSchema')

const userLogin = async (userData) => {
    try{
        let user = await Attendance.findOne({employeeId: userData.id})
        if(!user){
            user = await Attendance.create({
                employeeId: userData.id,
                timesheet:[{
                    startTime: userData.startTime,
                    endTime: null,
                    breaks:[]
                }]
            })
            await user.save()
            return
        }
        user.timesheet.push({
            startTime: userData.startTime,
            endTime: null,
            breaks:[]
        })
        await user.save()
    }
    catch(err){
        console.log(err)
    }
}

const userLogout = async (userData) => {
    try{
        let user = await Attendance.findOne({employeeId: userData.id})
        user.timesheet[user.timesheet.length - 1].endTime = userData.endTime
        await user.save()
    }
    catch(err){
        console.log(err)
    }
}

const userPause = async (userData) => {
    try{
        let user = await Attendance.findOne({employeeId: userData.id})
        const timeSheetLength = user.timesheet.length
        user.timesheet[timeSheetLength - 1].breaks.push({
            start: userData.start,
            end: null
        })
        await user.save()
    }
    catch(err){
        console.log(err)
    }
}

const userUnpause = async (userData) => {
    try{
        let user = await Attendance.findOne({employeeId: userData.id})
        const timeSheetLength = parseInt(user.timesheet.length)
        const breaksLength = parseInt(user.timesheet[timeSheetLength - 1].breaks.length)
        const start = user.timesheet[timeSheetLength - 1].breaks[breaksLength - 1].start
        user.timesheet[timeSheetLength - 1].breaks[breaksLength - 1].end = userData.end
        await user.save()
        return start
    }
    catch(err){
        console.log('here')
        console.log(err)
    }
}

module.exports.userLogin = userLogin
module.exports.userLogout = userLogout
module.exports.userPause = userPause
module.exports.userUnpause = userUnpause