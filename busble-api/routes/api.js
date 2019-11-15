const express = require('express');
const router = express.Router();
const UserResourceController = require('../controllers/UserResourceController')
const LoginResourceController = require('../controllers/LoginResourceController')
const checkUser = require('../middleware/checkUser')
const isAuth = require('../middleware/isAuth')
const attachCurrentUser = require('../middleware/attachCurrentUser')


router.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'ok'
    })
})

router.post('/login', checkUser, LoginResourceController.login)
router.get('/profile', isAuth, attachCurrentUser, LoginResourceController.profile)

// router.get('/users', UserResourceController.getUser);
// router.get('/users/:id', UserResourceController.findUser);
// router.post('/users/create', UserResourceController.createUser);

module.exports = router;