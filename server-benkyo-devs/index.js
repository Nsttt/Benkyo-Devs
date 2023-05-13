const express = require('express');

const app = express();
const { getCard, getIdCard } = require('./controllers/card/cards');

app.get('/card/:id', getIdCard); // enpoint para ver cards por id
app.get('/', getCard); // enpoint para ver todas las cards

app.listen(4000, () => {
    console.log('Servidor iniciado en el puerto 4000');
});
