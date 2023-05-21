const generateError = (message, status) => {
    const error = new Error(message);
    error.httpStatus = 400;
    throw error;
}

const listQuestions = async () => {
    const tasks = await readFile('./questions.json', 'utf8');

    // console.log(tasks);

    const date = JSON.parse(tasks);
    // console.log(date);

    return date;
};

module.exports = {
    generateError,
    listQuestions,
}
