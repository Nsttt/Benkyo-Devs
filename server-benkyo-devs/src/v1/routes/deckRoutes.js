const express = require('express');
const router = express.Router();
const deckController = require('../../controllers/deckController')
const { userAuth } = require('../../../midllewares/userAuth');

router
    .get('/:d', userAuth, deckController.getDecksController)
    .put('/fails/:id', userAuth, deckController.failsDeckController);


module.exports = router;