// Napisz program który: Wypisze komunikat Hello 5 razy, w odstępach co 1 sekundę, następnie wypisze Finish i się zakończy. Użyj funkcji setInterval.


function fn () {
    let counter = 0;

    setInterval(() => {
        counter === 5 ? "Finish" : counter ++;
    }, 1000);
};

console.log(fn())