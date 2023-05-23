const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateError } = require('../helpers/helpers');
const { createUser, getUserByEmail, getUserById } = require('../db/users');

const newUserController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            throw generateError('Debes enviar un nombre, un email y una password', 400);
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
        const { id } = req.params;
        
        const user = await getUserById(id);

        console.log(user);

        res.send({
            status: 'ok',
            data: user,
        });
    } catch(error) {
        next(error);
    }
};


const loginController = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            throw generateError('Debes enviar un email y una password', 400);
        }

        const user = await getUserByEmail(email);

        const validPassword = await bcrypt.compare(password, user.password); 

        if(!validPassword) {
            throw generateError('La contraseña no coincide', 401);
        }

        const payload = { id: user.id };

        const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '30d',
        });

        res.send({
            status: 'ok',
            data: token,
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