const { listQuestions } = require('../../../helpers');

const getCard = async (req, res, next) => {
    try {
        const newTasks = await listQuestions();
        res.json(newTasks);
    } catch (err) {
        next(err);
    }
};
const getIdCard = async (req, res, next) => {
    try {
        const { id } = req.params;
        const datos = await listQuestions();
        console.log(datos.easy);
        const datoFound = datos.easy.find(function (dato) {
            return dato.id == id;
        });
        // console.log(datos);
        res.json(datoFound);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getCard,
    getIdCard,
};
