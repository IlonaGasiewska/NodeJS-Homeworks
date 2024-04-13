const getWeather = require ("./weather.js");
let LAT;
let LNG;

function getUser(id, clallback) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`

    fetch(url)
    .then(res => res.json())
    .then(data => () => {
        LAT = data.address.geo.lat;
        LNG = data.address.geo.lng;
        return LNG, LAT
    });


    // clallback()
};

console.log(LAT, LNG)

module.exports = {
    LAT, 
    LNG,
    getUser
};