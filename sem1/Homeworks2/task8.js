// Rozszerzenie aplikacji z zadania 7 o wprowadzanie danych które chcemy zapisać w parametrach uruchamiania. Do wykorzystania zewnętrzny moduł yargs.
// Przykład uruchomienia aplikacji

const yargs = require ("yargs");

const argv = yargs
  .option('name', {
    describe: 'User name',
    demandOption: true,
    type: 'string',
  })
  .option('lastName', {
    describe: 'User last name',
    demandOption: true,
    type: 'string',
  }).argv;


const user = {
    name : argv.name,
    lastName : argv.lastName
}

console.log(user)