const express = require('express');
const router = express.Router();
const cardController = require('../../controllers/cardController');

router
    .get('/card', cardController.getCardByIdController);

    
module.exports = router;