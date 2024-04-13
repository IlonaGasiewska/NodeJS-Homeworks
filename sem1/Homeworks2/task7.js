// Stworzenie aplikacji która pozwoli na zapisanie całego obiektu do pliku. Z wykorzystaniem funkcji pozwalającej na przekonwertowanie obiektu na postać tekstową (JSON.stringify).

const fs = require("fs")

const user = {
    name: 'Jan',
    lastName: 'Nowak'
};


const userToString = JSON.stringify(user);
console.log(userToString);

