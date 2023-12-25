function getWeather() {
    var cityInput = document.getElementById("cityInput");
    var weatherInfoDiv = document.getElementById("weatherInfo");

    var cityName = cityInput.value.trim();


    if (cityName !== "") {
        var apiKey = "YOUR_API_KEY";
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error("Weather info could not retrieved",error);
            weatherInfoDiv.innerHTML = "Weather info could not retrieved";
        });
    }else {
       weatherInfoDiv.innerHTML = "Please enter a city name.";
    }
}

function displayWeather(data) {
    var weatherInfoDiv = document.getElementById("weatherInfo");
    var cityName = data.name;
    var temperature = data.main.temp;
    var description = data.weather[0].description;


    var weatherHTML = `
    <h2>${cityName}</h2>
    <p>Temperature: ${temperature} </p>
    <p>Description: ${description}</p>
    `

    weatherInfoDiv.innerHTML = weatherHTML;

}