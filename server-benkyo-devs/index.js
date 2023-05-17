const express = require('express');

const app = express();
const { getCard, getIdCard } = require('./controllers/user/card/cards');

app.get('/card/:id', getIdCard); // enpoint para ver cards por id
app.get('/', getCard); // enpoint para ver todas las cards



const LANGUAGES_MOCK = [
    {
        id: 1,
        name: 'JavaScript',
        description: 'JavaScript is a programming language that conforms to the ECMAScript specification.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png',
    },
    {
        id: 2,
        name: 'Python',
        description: 'Python is an interpreted, high-level and general-purpose programming language.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/480px-Python-logo-notext.svg.png',
    },
    {
        id: 3,
        name: 'PHP',
        description: 'Python is an interpreted, high-level and general-purpose programming language.',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/480px-Python-logo-notext.svg.png',
    },
];

app.get('/api/languages', (req, res) => {
    res.json(LANGUAGES_MOCK);
});


app.listen(4000, () => {
    console.log('Servidor iniciado en el puerto 4000');
});
