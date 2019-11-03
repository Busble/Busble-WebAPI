const express = require('express');
const router = express.Router();
const UserResourceController = require('../controllers/UserResourceController');

router.get('/', UserResourceController.getUser);
router.get('/:id', UserResourceController.findUser);
router.post('/create', UserResourceController.createUser);

module.exports = router;