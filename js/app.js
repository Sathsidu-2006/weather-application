let apiKey = "1a6b178914a047b4bf4105357261210";
let baseUrl ="http://api.weatherapi.com/v1";
let city = "Colombo";

fetch(`${baseUrl}/current.json?key=${apiKey}&q=${city}`).then(res => res.json()).then(data =>{
    console.log(data);


});