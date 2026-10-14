let apiKey = "1a6b178914a047b4bf4105357261210";
let baseUrl ="http://api.weatherapi.com/v1";
let city = "Colombo";


function fetchWeather(){

    fetch(`${baseUrl}/current.json?key=${apiKey}&q=${city}`).then(res => res.json()).then(data =>{
    console.log(data);

    let divContainer = document.getElementById("divContainer");

    let body = `
        <div class="sub-container">
            <h5 class ="heading">Weather</h5>
            <img src="${data.current.condition.icon}" alt="" class="icon">
            <p>${data.current.condition.text}</p>
        </div>

        <div class="sub-container">
            
            <p> Example text</p>
            <p> Example text</p>
        </div>

        <div class="sub-container">
            
            <p> Example text</p>
        </div>

        <div class="sub-container">
            
            <p> Example text</p>
        </div>
    
    `

    divContainer.innerHTML=body;

    });
}

fetchWeather();

function btnSearchOnAction(){
    city = document.getElementById("txtSearch").value;

    fetchWeather();
    console.log(data);

}


