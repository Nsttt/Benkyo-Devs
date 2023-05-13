const { readFile } = require('fs').promises;

//const fs = require('fs');

const listQuestions = async () => {
    const tasks = await readFile('./questions.json', 'utf8');

    // console.log(tasks);

    const date = JSON.parse(tasks);
    // console.log(date);

    return date;
};

module.exports = {
    listQuestions,
};
