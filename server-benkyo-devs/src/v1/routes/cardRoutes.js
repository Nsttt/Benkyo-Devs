const express = require('express');
const router = express.Router();
const cardController = require('../../controllers/cardController');

router
    .get('/mysql/:id', cardController.getMySQLCardByIdController)
    .get('/:id', cardController.getCardByIdController);
    
module.exports = router;