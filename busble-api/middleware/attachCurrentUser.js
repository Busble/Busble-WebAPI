// require('dotenv').config()
const User = require('../models').users

module.exports = async (req, res, next) => {
    const jwt = req.user
    const userId = jwt.sub
    const user = await User.findByPk(userId)
    
    req.currentUser = user

    if(!user) {
        return res.status(401).end('User not found')
    } else {
        return next()
    }
}