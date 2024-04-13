// Stworzenie kalkulatora który będzie pracował na danych wprowadzonych w prarametrach uruchamiania. Przy użyciu zewnętrznego modułu yargs (moduł odpowiedzialny za przetwarzanie parametrów wejściowych).

// Podstawowa dokumentacja: https://davidwalsh.name/nodejs-arguments-yargs

// Zaawansowana dokumentacja: https://devhints.io/yargs oraz https://codezup.com/run-node-js-command-line-arguments-yargs-npm/

// Przykładowy sposób uruchomienia:

// > node app.js --a=5 --b=7 --operator=*
// Konsola powinna zwrócić wynik operacji:

const yargs = require("yargs");

const argv = yargs
  .option("operand1", {
    describe: "First number",
    demandOption: true,
    type: "number", 
  })
  .option("operand2", {
    describe: "Second number",
    demandOption: true,
    type: "number",
  })
  .option("operator", {
    describe: 'Operation type (+, -, / or *)',
    demandOption: true,
    choices: ["+", "-", "/", "*"], 
  })
  .argv;


function getResult () {
    if(argv.operator === "+" || argv.operator === "-"){
        return argv.operator === "+" ? argv.operand1 + argv.operand2 : argv.operand1 - argv.operand2
    }else {
        return argv.operator === "*" ? argv.operand1 * argv.operand2 : argv.operand1 / argv.operand2
    }
}
console.log('Result:', getResult());