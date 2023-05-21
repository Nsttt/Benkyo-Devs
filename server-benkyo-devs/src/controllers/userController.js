const { generateError } = require('../helpers/helpers');
const { createUser } = require('../db/users');

const newUserController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        //Aquí aplicaré el helper de Joi

        if(!name || !email || !password) {
            throw generateError('Debes elegir un nombre, un email y una password', 400);
        }

        const id = await createUser(name, email, password);

        console.log(id);

        res.send({
            status: 'Ok',
            message: `User created with id: ${id}`,
        });

    } catch(error) {
        next(error);
    }
};

const getUserController = async (req, res, next) => {
    try {
        res.send({
            status: 'error',
            message: 'Not implemented',
        });
    } catch(error) {
        next(error);
    }
};


const loginController = async (req, res, next) => {
    
    const {params} = req.body;

    try {
        res.send({
            params
        });
    } catch(error) {
        next(error);
    }
};


module.exports = {
    newUserController,
    getUserController,
    loginController,
};