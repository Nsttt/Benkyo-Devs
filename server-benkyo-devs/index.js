const express = require('express');

const app = express();

const listTasks = async () => {
    const tasks = await readFile('./preguntas.json', 'utf8');

    console.log(tasks);

    const date = JSON.parse(tasks);
    console.log(date);

    return date;
};
const getTasks = async (req, res, next) => {
    try {
        const newTasks = await listTasks();
        res.json(newTasks);
    } catch (err) {
        next(err);
    }
};

app.get('/', getTasks);

app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
});
app.listen(4000, () => {
    console.log('Servidor iniciado en el puerto 4000');
});
