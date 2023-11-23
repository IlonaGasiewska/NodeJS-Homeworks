// Program który wyświetla informacje o plikach i folderach w danej lokalizacji:
// użytkownik w parametrze podaje adres folderu (parametr wymagany) i rozmiar pliku (parametr opcjonalny)
// program wyświetla informacje o plikach w folderze: nazwa i wielkość:
// jeżeli użytkownik poda w parametrze rozmiar pliku, to wyświetlamy listę plików, które są większe niż podany rozmiar
// w przeciwnym wypadku, wyświetlamy listę plików których rozmiar jest większy niż średni rozmiar pliku w tym folderze
// Pliki powinny być posortowane malejąco od największych do najmniejszych.

// Podpowiedzi:

// zadanie można wykonać przy pomocy modułów które już wykorzystywaliśmy na zajęciach
// dozwolone jest użycie innych modułów dostępnych w npm
// dla ułatwienia możemy potraktować foldery jako pliki o rozmiarze 0
// nie trzeba robić tabelki jak na przykładzie ;)

const fs = require("fs");
const lodash = require ("lodash");
const yargs = require ("yargs");

const argv = yargs
  .option('fileUrl', {
    describe: 'URL to file',
    demandOption: true,
    type: 'string',
  })
  .option('fileSize', {
    describe: 'File size',
    demandOption: false,
    type: 'number',
  }).argv;

const files = fs.readdirSync(argv.fileUrl);

function getFiles(){
  
    const fileData = files.map(file => {
        return {
            file : file,
            size : fileSize = fs.statSync(file).size
        }
    });

    return lodash.sortBy(fileData,["size"]).filter(file => argv.fileSize ? file.size > argv.fileSize : file.size > lodash.sumBy(fileData,"size") / fileData.length);
}
 
console.log(getFiles());




