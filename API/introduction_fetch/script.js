
window.addEventListener('load', () => {
    const API_KEY = "2a60edfacc3acc1bde7d263a79cb5e5d";
    const API_WEATHER = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&lang=fr&appid=" + API_KEY;
    const API_GEO = "http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid=" + API_KEY;

    const cityInput = document.getElementById('city');
    const btnSearch = document.getElementById('btnSearch');
    const btnGeolocalisation = document.getElementById('btnGeolocalisation');
    const result = document.getElementById('result');

    btnSearch.addEventListener('click', () => {
        getCoordsFromCity(cityInput.value.trim());
    });
    btnGeolocalisation.addEventListener('click', getCoordsFromGeolocalisation);


    async function getWeather (latitude, longitude) {

        const response = await getResponseJson(API_WEATHER.replace("{lat}", latitude).replace("{lon}", longitude));

        console.log('response :>> ', response);

        let iconUrl = "https://openweathermap.org/img/wn/{code}@2x.png";

        let cityName = response.name;
        let currentTemp = response.main.temp;
        let maxTemp = response.main.temp_max;
        let minTemp = response.main.temp_min;
        let humidityPercent = response.main.humidity;

        let sunsetTimestamp = response.sys.sunset;
        let sunriseTimestamp = response.sys.sunrise;

        let sunset = new Date(sunsetTimestamp * 1000);
        let sunrise = new Date(sunriseTimestamp * 1000);

        let weatherDescription = response.weather[0].description;
        let weatherIcon = response.weather[0].icon;

        result.innerHTML = `
        <h3> <img src='${iconUrl.replace('{code}', weatherIcon)}'> ${cityName}</h3>       
        <p>currentTemp: ${currentTemp} °C</p>        
        <p>maxTemp: ${maxTemp} °C</p>        
        <p>minTemp: ${minTemp} °C</p>        
        <p>humidityPercent: ${humidityPercent} %</p>
        <p>weatherDescription: ${weatherDescription}</p>

        <p>Levé du soleil: ${sunrise.getHours()}:${sunrise.getMinutes()}</p>
        <p>Couché du soleil: ${sunset.getHours()}:${sunset.getMinutes()}</p>

        `;



    }

    async function getCoordsFromCity (city) {
        const coords = {};

        let information = await getResponseJson(API_GEO.replace("{city}", city));

        coords.lat = information[0].lat;
        coords.lon = information[0].lon;

        getWeather(coords.lat, coords.lon);
    }

    function getCoordsFromGeolocalisation () {
        const coords = {};

        navigator.geolocation.getCurrentPosition(
            (position) => {
                coords.lat = position.coords.latitude;
                coords.lon = position.coords.longitude;

                getWeather(coords.lat, coords.lon);
            },
            error => console.log(error)
        );
    }

    async function getResponseJson (url) {
        return (await fetch(url)).json();
    }

});