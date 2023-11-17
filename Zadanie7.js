// Zadanie 7

// Aplikacja wyświetlająca informację o zalogowanym użytkowniku systemu, przy użyciu modułu OS (https://nodejs.org/dist/latest-v18.x/docs/api/os.html) . Dodatkowo: zapis nazwy użytkownika do pliku na dysku.

const os = require('node:os');
console.log(os.userInfo()); 

const userName = os.userInfo().username;
const fs = require("fs");
fs.writeFileSync("userName.txt", userName)

console.log(os.userInfo());