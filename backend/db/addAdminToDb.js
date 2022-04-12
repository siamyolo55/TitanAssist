// dependencies
const AdminSchema = require('../src/models/AdminSchema')


const addAdminToDb = async (adminData) => {
    try{
        console.log(adminData)
        const admin = await AdminSchema.create({
            adminId: adminData.adminId,
            adminName: adminData.adminName,
            adminUsername: adminData.adminUsername,
            adminPassword: adminData.adminPassword,
            adminCompanyId: adminData.companyId,
            adminCompanyName: adminData.companyName
        })

        await admin.save()
    }
    catch(err){
        console.log(err)
    }
}

module.exports = addAdminToDb