const express = require('express');
const router = express.Router();
const cardController = require('../../controllers/cardController');

router
    .get('/:id', cardController.getCardByIdController)
    .post('/level/language', cardController.getCardByLangAndLevel );
module.exports = router;