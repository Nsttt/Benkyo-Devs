const { getConnection } = require('./db');
const { generateError } = require('../helpers/helpers');
const bcrypt = require('bcrypt');


const createUser = async (name, email, password) => {
    
    let connection;

    try {
        connection = await getConnection();
   
        const [userId]= await connection.query(
            `
            SELECT id FROM user WHERE email = ?
            `,
            [email]
        );

        if (userId.length > 0) {
            throw generateError(
                'Ya existe un usuario con esa dirección de correo',
                409
            );
        }

        const passwordHash = await bcrypt.hash(password, 8);

        const [newUser] = await connection.query(
            `
            INSERT INTO USER (name, email, password) VALUES (?, ?, ?);
            `, 
            [name, email, passwordHash]
        );
       
        return newUser.insertId;
    } finally {
        if(connection) connection.release();
    }
};

module.exports = {
    createUser,
};