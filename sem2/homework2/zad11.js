// Napiszmy aplikację która zwraca dane użytkownika pobrane z adresu https://jsonplaceholder.typicode.com/users/{userId}. UserId niech będzie pobierane z adresu naszego endpointu (np http//localhost:4700/users/:userId). W przypadku braku użytkownika lub problemów w komunikacji z serwerem rzućmy Error, który zostanie obsłużony w middleware. Middleware powinno zapisać do pliku czas wystąpienia błędu i zwrócić odpowiedź ze stosownym komunikatem.

const fs = require('fs');
const express = require('express')
const app = express()
const port = 4700;

app.get('/user/:userId', async (req, res, next) => {
    try {
        const userId  = req.params.userId;
        const url = `https://jsonplaceholder.tyvvvpicode.com/users/${userId}`;
        const userData = await getData(url);
        res.send(userData);
    } catch (error) {
        next(error);
    }    
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

const getData = (url) => {
    return fetch(url)
    .then(res => res.json())
    .then(data => data)
}

app.use(errorHandler)

function errorHandler(error, req, res, next) {
    fs.appendFileSync('errors.log', `Error occurred at ${new Date()}: ${error.message}\n`);
    res.send("Can not get user");
    next()
}