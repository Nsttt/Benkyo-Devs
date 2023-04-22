/* 
    Controlador que hace el login de un usuario
*/

const getDB = require('../../db/getDB');
const { generateError } = require('../../helpers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginUser = async (req, res, next) => {
    let connection;

    try {
        // Abrimos una conexión con la base de datos
        connection = await getDB();

        // Obtenemos los datos necesarios para el login
        const { username, password } = req.body;

        // Si no indica un email o la contraseña lanzamos un error
        if (!username || !password) {
            throw generateError('Faltan campos obligatorios.', 400); // Bad Request
        }

        // Comprobamos que existe un usuario con ese email en la base de datos y está activo
        const [user] = await connection.query(
            `SELECT * FROM user WHERE username = ?`,
            [email]
        );

        // Comprobamos que la contraseña recibida es la correcta
        let validPassword;

        // Si hay algun usuario con el email, podemos obtener su contraseña
        if (user.length > 0) {
            validPassword = await bcrypt.compare(password, user[0].password);
        }

        // Si la contraseña no es válida o el email no es válido
        if (user.length < 1 || !validPassword) {
            throw generateError('Username o password incorrectos.', 401); // Unauthorized
        }

        // // Si el usuario no está activado
        // if (user[0].active !== 1) {
        //     throw generateError(
        //         '¡Usuario no activado, comprueba tu correo para activarlo!',
        //         403
        //     ); // Forbidden
        // }

        ///// Generamos el token

        // Objeto con información útil del usuario que guardaremos en el token
        const tokenInfo = {
            id: user[0].id,
        };

        // Creamos el token
        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '2d',
        });

        // Si ha ido todo bien hasta aqui, respondemos con el token generado
        res.send({
            status: 'Ok',
            message: '¡Sesión iniciada con éxito!',
            authToken: token,
        });
    } catch (error) {
        // En caso de que ocurra algun error lo pasamos
        next(error);
    } finally {
        // Finalmente, cerramos la conexion con la bbdd
        if (connection) connection.release();
    }
};

// Exportamos la funcion
module.exports = loginUser;