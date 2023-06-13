const { getConnection } = require('./db');
const { generateError } = require('../helpers/generateError');

const getDecks = async (id) => {
    let connection;

    try {
        connection = await getConnection();

        const [result] = await connection.query(
            `
                SELECT d.id, d.name
                FROM deck d
                JOIN user_deck ud ON d.id = ud.id_deck
                JOIN user u ON ud.id_user = u.id
                WHERE u.id = 1;
            `,[id]
        );

        return result[0];
    } finally {
        if (connection) connection.release();
    }
}

const createFailsDeck = async (id) => {
    let connection;

    try {
        connection = await getConnection();

        //Crea un nuevo mazo fails
        const [] = await connection.query(
            `
                INSERT INTO deck (name) VALUES ('fails_user_${id}');
            `
        );
        
        const [deckId] = await connection.query(
            `
                SELECT id FROM deck WHERE name = 'fails_user_${id}';
            `
        );

        const [] = await connection.query(
            `
                UPDATE user_deck SET id_user = ${id} , id_deck = ${deckId[0].id};
            `
        );

        return deckId[0];
    } finally {
        if (connection) connection.release();
    }
}


module.exports = {
    createFailsDeck, getDecks,
}