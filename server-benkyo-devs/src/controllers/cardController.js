const { listQuestions } = require('../helpers/helpers');

const getCardByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await listQuestions();
        console.log(data.easy);
        const dataFound = data.easy.find(function (data) {
            return data.id == id;
        });
        // console.log(datos);
        res.json(dataFound);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getCardByIdController,
};