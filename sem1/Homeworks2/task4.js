// Znalezienie minimalnej oraz maksymalnej wartości w tablicy przy użyciu biblioteki lodash

const lodash = require("lodash")

const array = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8]

let minNum = lodash.min(array);
let maxNum = lodash.max(array)

console.log(`Min number in array: ${minNum}`);
console.log(`Max number in array: ${maxNum}`);