const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router
    .post('/user', userController.newUserController)
    .get('/user/:id', userController.getUserController)
    .post('/login', userController.loginController);

module.exports = router;
