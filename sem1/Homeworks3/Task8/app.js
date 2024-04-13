// Podziel aplikację z zadania 7 na moduły odpowiednio:
// app.js – plik główny który uruchomi naszą aplikację i wywoła funkcje z naszego modułu user.js

// user.js – moduł z pobieraniem danych użytkownika

// weather.js – moduł z pobieraniem danych o prognozie pogody

const getWeather = require ("./weather.js");
const user = require ("./user.js");

const id = process.argv[3];

user.getUser(id, getWeather);