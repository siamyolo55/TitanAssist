// dependencies


exports.userLoginController = async (req, res) => {
    //console.log(req.body)
    let {id, startTime} = req.body
    

    res.status(201).json({
        message: 'dummy received'
    })
}