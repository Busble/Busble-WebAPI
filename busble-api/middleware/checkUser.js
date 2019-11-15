// require('dotenv').config()
const User = require('../models').users
const bcrypt = require('bcrypt')

module.exports = (req, res, next) => {
    const { username } = req.body
    const { password } = req.body
    User.findOne({ where: { username: username }}).then(user => {
        if (user) {
            if (user.username === username && bcrypt.compareSync(password, user.password)) {
                req.body.user_id = user.id
                next()
            } else {
                res.status(400).json({
                    msg: 'User Incorrect'
                })
            }
        } else {
            res.status(400).json({
                msg: 'User Not Found'
            })
        }
    })
}