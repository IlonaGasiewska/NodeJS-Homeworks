// Zadanie 12

// Aplikacja złożona jest z jednego pliku: app.js. Podczas uruchamiania możemy przekazać jej dodatkowy parametr który jest ścieżką do istniejącego na dysku folderu. Zadaniem aplikacji jest wyświetlanie w konsoli nazw wszystkich plików i folderów znajdujących się bezpośrednio we wskazanym folderze. Uruchomienie z niewłaściwą liczbą parametrów powinno skutkować wyświetleniem komunikatu w konsoli. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v18.x/docs/api/fs.html , potrzebna funkcja przyrostek Sync)`


const fs =  require("fs");

const path = process.argv[2]

if (process.argv.length !== 3) {
    console.error("Wymagana ścieżka do plików");
    process.exit(1); 
}

fs.readdir(path,(err,pliki)=>{
    if(err){
        console.log("błąd odczytu");
        return;
    }
    console.log(pliki);
});

