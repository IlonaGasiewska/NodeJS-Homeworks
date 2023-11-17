// Zadanie 10
// Rozszerzenie aplikacji z zadania 8 tak, by nazwy plików z których pobieramy liczby były podawane w parametrach w czasie uruchamiania.

const fs = require('fs');


const fileA = process.argv[2];
const fileB = process.argv[3];

const a = parseInt(fs.readFileSync(fileA, 'utf-8'));
const b = parseInt(fs.readFileSync(fileB, 'utf-8'));

function add(a, b) {
    const result = a + b;
    return `Dodawanie liczb ${a} i ${b} daje w wynik ${result}`;
}

function sub(a, b) {
    const result = a - b;
    return `Odejmowanie liczb ${a} i ${b} daje w wynik ${result}`;
}

function mul(a, b) {
    const result = a * b;
    return `Mnożenie liczb ${a} i ${b} daje w wynik ${result}`;
}

function div(a, b) {
    const result = a / b;
    return `Dzielenie liczb ${a} i ${b} daje w wynik ${result}`;
}

const additionResult = add(a, b);
const subtractionResult = sub(a, b);
const multiplicationResult = mul(a, b);
const divisionResult = div(a, b);

fs.writeFileSync('./wynik.txt', `${additionResult}\n${subtractionResult}\n${multiplicationResult}\n${divisionResult}`);
