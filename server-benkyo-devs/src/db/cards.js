const { getConnection } = require('./db');
const { generateError } = require('../helpers/helpers');

const getCardById = async (id) => {
    let connection;

    try {
        connection = await getConnection();

        const [result] = await connection.query(
            `SELECT * FROM card WHERE id = ?`,
            [id]
        );

        if(result.length === 0) {
            throw generateError('No hay ninguna card con ese id')
        }

        return result[0]
    } finally {
        if (connection) connection.release();
    }
}

module.exports = {
    getCardById,
}