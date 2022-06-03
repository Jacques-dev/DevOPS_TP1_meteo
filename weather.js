const https = require('https')


var args = process.argv.slice(2);

const longitude = args[1];
const latitude = args[0];
const appId = "240aa650f4db4e154a07d0459c30a347";
const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + appId + "&units=metric";
https.get(url, (response) => {
    if (response.statusCode === 200) {
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
        })
    } else {
        console.log("Error, try again later & verify your internet connexion")
    }
})
