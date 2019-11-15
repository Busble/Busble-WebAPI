// require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
    login (req, res) {
        const payload = {
            sub: req.body.user_id,
            name: req.body.username,
            iat: new Date().getTime()
        }

        const secret = 'w,j[vdsivd'
        let token = jwt.sign(payload, secret);
        res.status(200).json({
            token: token
        })
    },

    profile (req, res) {
        res.status(200).json(req.currentUser)    
    }
}