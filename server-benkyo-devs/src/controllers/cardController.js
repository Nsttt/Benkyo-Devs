const { getCardById, getCards, getFailCards, getFavouriteCards } = require('../db/cards');

const getCardByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const card = await getCardById(id);

        console.log(card);

        res.send({
            status: `Card with id ${id} ok`,
            data: card,
        });
    } catch(error) {
        next(error);
    }
};

const getCardsByLangAndLevel = async (req, res, next) => {
    try {
        const { language } = req.body;
        const { level } = req.body;

        const cards = await getCards(language, level);

        res.send({
            status: 'ok',
            data: cards,
        });
    } catch(error) {
        next(error);
    }
};

const getFailCardsByUserId = async (req, res, next) => {
    try {
        const { id } = req.params;

        const cards = await getFailCards(id);

        res.send({
            status: 'ok',
            data: cards,
        });
    } catch(error) {
        next(error);
    }
};

const getFavouriteCardsByUserId = async (req, res, next) => {
    try {
        const { id } = req.params;

        const cards = await getFavouriteCards(id);

        res.send({
            status: 'ok',
            data: cards,
        });
    } catch(error) {
        next(error);
    }
};



module.exports = {
    getCardByIdController, getCardsByLangAndLevel, getFailCardsByUserId, getFavouriteCardsByUserId
};