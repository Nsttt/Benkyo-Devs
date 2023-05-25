const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router
    .post('/register', userController.newUserController)
    .get('/:id', userController.getUserController)
    .post('/login', userController.loginController);

module.exports = router;
