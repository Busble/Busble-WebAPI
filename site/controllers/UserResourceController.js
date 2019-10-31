const User = require('../models').users;
// const { check, validationResult } = require('express-validator')

module.exports = {
    async getUser(req, res, next) {

        try {
            const users = await User.findAll();
            res.status(200).json(users);
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    },

    async createUser(req, res, next) {
        if (typeof req.body.username === 'undefined' || req.body.username.length === 0) {
            res.status(400).json({
                msg: `username is require`
            });
        }
        try {
            const userCollection = await User.create(req.body)
            res.status(200).json(userCollection);
        }
        catch(e) {
            console.log(e);
            res.status(400).send(e);
        }
                   
    },

    async findUser(req, res, next) {
        try {
            const { id } = req.params
            const user = await User.findOne({ where: {id: id} })
            res.status(200).json(user)
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
                    
    }
}