const express = require('express');
const router = express.Router();
const cardController = require('../../controllers/cardController');
const { userAuth } = require('../../../midllewares/userAuth');

router
    .get('/:id', cardController.getCardByIdController)
    .post('/level/language', cardController.getCardsByLangAndLevel)
    .get('/user_card/:id', cardController.getUserCardController)
    .put('/correct/:id', userAuth, cardController.setCorrectCard)
    .put('/favourite/:id', userAuth, cardController.setFavouriteCard)
    .put('/delete_favourite/:id', userAuth, cardController.deleteFavouriteCard)
    .get('/fails/:id', cardController.getFailCardsByUserId)
    .get('/favourites/:id', cardController.getFavouriteCardsByUserId)
    .get('/correct/:id', cardController.getCorrectCardsByUserId);


    module.exports = router;