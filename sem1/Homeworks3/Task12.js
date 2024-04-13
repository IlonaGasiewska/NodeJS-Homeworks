// Napisz program który w nieskończoność będzie wypisywał komunikat Hello World X z różnymi opóźnieniami, gdzie X to aktualne opóźnienie w sekundach. Zacznij z 1-sekundowym opóźnieniem, a następnie zwiększaj opóźnienie za każdym razem o 1 sekundę. (Za drugim razem opóźnienie będzie wynosiło 2 sekundy, za trzecim 3 sekundy, i tak dalej). Niech program wykonuje się nieskończoność, do momentu przerwania przez użytkow


let delay = 1000;

function printDelay() {
    console.log(delay);
    return delay = delay + 1000;
}

setInterval(printDelay, delay);

console.log(delay)