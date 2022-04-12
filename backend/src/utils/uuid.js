const { v4 } = require('uuid')

const uuid = () => {
    const newUuid = v4()
    return newUuid
}

module.exports = uuid