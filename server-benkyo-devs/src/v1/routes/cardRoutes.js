const express = require('express');
const router = express.Router();
const cardController = require('../../controllers/cardController');

router
    .get('/:id', cardController.getCardByIdController)
    .post('/level/language', cardController.getCardsByLangAndLevel)
    .get('/fails/:id', cardController.getFailCardsByUserId)
    .get('/favourites/:id', cardController.getFavouriteCardsByUserId);

    module.exports = router;