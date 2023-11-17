// Zadanie 8 
// Rozszerzenie zadania 4. Aplikacja powinna wczytać jedną liczbę z pliku a.txt, drugą liczbę z pliku b.txt (zakładamy, że oba te pliki zawierają tylko jedną liczbę). Na tych liczbach należy wykonać operacja dodawania, odejmowania, mnożenia i dzielenia a wyniki wszystkich działań zapisać w pliku wynik.txt, każdy wynik w osobnej linii. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v18.x/docs/api/fs.html , szukane funkcje mają przyrostek Sync)

// Dodawanie liczb 1024 i 16 daje w wyniku 1040
// Odejmowanie liczb 1024 i 16 daje w wyniku 1008
// Mnożenie liczb 1024 i 16 daje w wyniku 16384
// Dzielenie liczb 1024 i 16 daje w wyniku 64


const fs = require('fs');

const a = parseInt(fs.readFileSync("./a.txt", 'utf-8'));
const b = parseInt(fs.readFileSync("./b.txt", 'utf-8'));

console.log(a)

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

