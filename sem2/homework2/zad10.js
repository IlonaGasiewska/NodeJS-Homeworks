// Napiszmy middleware który loguje w konsoli czas odebrania żądania oraz czas wysłania odpowiedzi. Uwaga: czas wysłania odpowiedzi zalogujmy po jej wysłaniu!
// Rozbudujmy aplikację z zadania 9 o zapisywanie logów do pliku - nowe logi powinny dopisywać się na końcu pliku.

const express = require("express");
const app = express();
const fs = require('fs');

const requestTime = (req, res, next) => {
    let requestTime = new Date().toISOString();
    console.log(`Request time: ${requestTime}`);
    fs.appendFileSync('time.log', `Request time: ${requestTime}\n`);
    next();
};

const responseTime = (req, res, next) => {
    let responseTime = new Date().toISOString();
    console.log(`Response time: ${responseTime}`);
    fs.appendFileSync('time.log', `Response time: ${responseTime}\n`);
};

app.use(requestTime);

app.get("*", (req, res, next) => {
    res.send("Hello World");
    next();
});

app.use(responseTime);

app.listen(4700, console.log("start server"));