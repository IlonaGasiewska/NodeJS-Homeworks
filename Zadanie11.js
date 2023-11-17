// Zadanie 11
// Rozszerzenie aplikacji z zadania 10 tak, by jej uruchomienie z niewłaściwą liczbą parametrów skutkowało wyświetleniem stosownego komunikatu w konsoli.

const fs = require('fs');


if (process.argv.length !== 4) {
    console.error("Wymagane nazwy plików");
    process.exit(1); 
}

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
