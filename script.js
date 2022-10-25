//API Key
var api_key = "4d89fc5098647df5a30436dd979396e9";

// DOM elements to display on page 
var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city-input");
var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");
var currentWeather = document.querySelector("#current-weather");
var previousCityEl = document.getElementById("search-container");
var fiveDayEl = document.querySelector("#forecast-cards");

var cityArray = [];


// search city form submission 
var formSubmitHandler = function(event) {
    event.preventDefault();

    var cityName = cityInputEl.value.trim();

    if (cityName) {
        getCityWeather(cityName);
        getForecast(cityName);

        cityArray.push(cityName);
        localStorage.setItem("city", JSON.stringify(cityArray));

        cityInputEl.value = "";

     } else {
        alert("Please enter a City name");
    }
};

// // clicking on previous searched city
var clickHandler = function (event) {

    var clickCity = event.currentTarget.textContent;

    getCityWeather(clickCity);
    getForecast(clickCity);
};


// requesting Current Weather API
var getCityWeather = function(cityName) {
    var apiURL = 'https://api.openweathermap.org/data/2.5/weather?=${cityName}&units=imperial&appid=${api_key}';

    // if response was successful 
    fetch(apiURL)
    console.log(apiURL)

    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayCityWeather(data, cityName);
            });
        } else {
            alert("Error:" + response.statusText);
        }
    })
    // if network error 
    .catch(function(error) {
        alert("Unable to connect to Open Weather");
    })

}



// 5 day forecast API 
var getForecast = function(cityName) {
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=${cityNAme}&units=imperial&cnt=6&appid=${api_key}';

    // if response was successful 
    fetch(forecastURL).then(function(response) {
            //    console.log(response)
        if (response.ok) {
            response.json().then(function(data) {
                displayForecast(data.list);
            });
        } else {
            alert("Error:" + response.statusText);
        }

    })
    // if network error 
    .catch(function(error) {
        alert("Unable to connect to Open Weather");
    })
};


// Displaying 5 day forecast   
var displayForecast = function (list) { 
    console.log(list);

        for (var i = 0; i <= 4; i++) {

        //date
        var displayDate1 = document.querySelector("#date-0");
        var forecastDate1 = moment().add(1, "days").format("L");
        displayDate1.textContent = forecastDate1;

        var displayDate2 = document.querySelector("#date-1");
        var forecastDate2 = moment().add(2, "days").format("L");
        displayDate2.textContent = forecastDate2;

        var displayDate3 = document.querySelector("#date-2");
        var forecastDate3 = moment().add(3, "days").format("L");
        displayDate3.textContent = forecastDate3;

        var displayDate4 = document.querySelector("#date-3");
        var forecastDate4 = moment().add(4, "days").format("L");
        displayDate4.textContent = forecastDate4;

        var displayDate5 = document.querySelector("#date-4");
        var forecastDate5 = moment().add(5, "days").format("L");
        displayDate5.textContent = forecastDate5;

        // temp
        var displayTemp = document.querySelector(`#temp-${i}`);
        var forecastTemp = list[i].main.temp + " °F";
        displayTemp.textContent = forecastTemp; 

        //humidity
        var displayHumidity = document.querySelector(`#humidity-${i}`);
        var forecastHumidity = list[i].main.humidity + "%";
        displayHumidity.textContent = forecastHumidity;


//icons (weather)
var displayIcon1 = document.querySelector("#city-icon-1");
var currentIcon1 = "https://openweathermap.org/img/wn/" + list[1].weather[0].icon + "@2x.png"
displayIcon1.setAttribute ("src", currentIcon1);

var displayIcon2 = document.querySelector("#city-icon-2");
var currentIcon2 = "https://openweathermap.org/img/wn/" + list[2].weather[0].icon  + "@2x.png"
displayIcon2.setAttribute ("src", currentIcon2);

var displayIcon3 = document.querySelector("#city-icon-3");
var currentIcon3 = "https://openweathermap.org/img/wn/" + list[3].weather[0].icon  + "@2x.png"
displayIcon3.setAttribute ("src", currentIcon3);

var displayIcon4 = document.querySelector("#city-icon-4");
var currentIcon4 = "https://openweathermap.org/img/wn/" + list[4].weather[0].icon  + "@2x.png"
displayIcon4.setAttribute ("src", currentIcon4);

var displayIcon5 = document.querySelector("#city-icon-5");
var currentIcon5 = "https://openweathermap.org/img/wn/" + list[5].weather[0].icon  + "@2x.png"
displayIcon5.setAttribute ("src", currentIcon5);

}

};

//search button
userFormEl.addEventListener("submit", formSubmitHandler);




//current weather data display
//temperature
//humidity
//wind speed

