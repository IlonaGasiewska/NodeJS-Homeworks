const user = require ("./user.js");

function getWeather(){
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${user.LAT}&lon=${user.LNG}`;

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
};


module.exports = getWeather;
