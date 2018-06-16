let requestURL = 'http://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=ef96bb82b8c215e4ec5411a85a1e3c8e&units=imperial';
  let weatherRequest = new XMLHttpRequest();
  weatherRequest.open('GET', requestURL);
  weatherRequest.send();
  weatherRequest.onload =  function () {
  let weatherData = JSON.parse(weatherRequest.responseText);

  document.getElementById('current-temp').innerHTML = weatherData.main.temp; /* correct */
    document.getElementById('humidity').innerHTML = weatherData.main.humidity; /* correct */
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed; /* correct */
    document.getElementById('winddeg').innerHTML = weatherData.wind.deg;
    document.getElementById('cityName').innerHTML = weatherData.name;
    document.getElementById('citymainname').innerHTML = weatherData.main.name;
    document.getElementById('main-weather').innerHTML = weatherData.weather.main;
    document.getElementById('min-temp').innerHTML = weatherData.main.temp_min;
    document.getElementById('max-temp').innerHTML = weatherData.main.temp_max;
    document.getElementById('cloudy').innerHTML = weatherData.clouds.all;
    document.getElementById('sunrise').innerHTML = weatherData.sys.sunrise;
    document.getElementById('sunset').innerHTML = weatherData.sys.sunset;
    document.getElementById('weatherdescription').innerHTML = weatherData.weather.description;
    document.getElementById('weathericon').innerHTML = weatherData.weather.icon;
    document.getElementById('weatherid').innerHTML = weatherData.weather.id;
    document.getElementById('weather').innerHTML = weatherData.weather;
    document.getElementById('main').innerHTML = weatherData.main[0];
    document.getElementById('wind').innerHTML = weatherData.wind[0];
    document.getElementById('clouds').innerHTML = weatherData.clouds[0];
    document.getElementById('rain').innerHTML = weatherData.rain[0];
    console.log(weatherData);
  }

  8:13
