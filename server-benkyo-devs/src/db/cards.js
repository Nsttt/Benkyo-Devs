const { getConnection } = require('./db');
const { generateError } = require('../helpers/generateError');

const getCardById = async (id) => {
    let connection;

    try {
        connection = await getConnection();

        const [result] = await connection.query(
            `SELECT * FROM card WHERE id = ?`,
            [id]
        );

        if(result.length === 0) {
            throw generateError(`Card con id ${id} no encontrada`);
        }

        return result[0]
    } finally {
        if (connection) connection.release();
    }
}

const getCards = async (language, level) => {
    let connection;

    try {
        connection = await getConnection();

        const [result] = await connection.query(
            `SELECT * FROM card INNER JOIN language ON card.id_language = language.id INNER JOIN level ON card.id_level = 
            level.id WHERE language.name = ? AND level.name = ?;`,
            [language, level]
        );

        if(result.length === 0) {
            throw generateError(`No existen tarjetas con ese lenguaje y ese nivel`);
        }
        console.log(result[0]);
        return result;
    } finally {
        if (connection) connection.release();
    }
}

module.exports = {
    getCardById, getCards
}