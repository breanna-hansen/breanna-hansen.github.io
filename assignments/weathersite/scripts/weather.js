function weatherData(page){
    switch(page) {
      case 'franklin':
        franklinWeather();
        break;
      case 'springfield':
        springfieldWeather();
        break;
      default:
        greenvilleWeather();
        break;
    }
  }

function franklinWeather() {
  let requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=ef96bb82b8c215e4ec5411a85a1e3c8e&units=imperial';
  let weatherRequest = new XMLHttpRequest();
  weatherRequest.open('GET', requestURL);
  weatherRequest.send();
  weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    function timestampSunrise(weatherData)
    {
      var dt = new Date(weatherData.sys.sunrise * 1000);
      var hr = dt.getHours();
      var m = "0" + dt.getMinutes();
      var s = "0" + dt.getSeconds();
      return hr+ ':' + m.substr(-2) + ' a.m.';
    }

    function timestampSunset(weatherData)
    {
      var dt = new Date(weatherData.sys.sunset * 1000);
      var hr = dt.getHours();
      var m = "0" + dt.getMinutes();
      var s = "0" + dt.getSeconds();
      var pm = hr - 12;
      return pm + ':' + m.substr(-2) + ' p.m.';
    }

    document.getElementById('current-temp').innerHTML = Math.round(weatherData.main.temp);
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(weatherData.wind.speed);
    document.getElementById('cityName').innerHTML = weatherData.name;
    document.getElementById('cityNameMedium').innerHTML = weatherData.name;
    document.getElementById('sunrise').innerHTML = timestampSunrise(weatherData);
    document.getElementById('sunset').innerHTML = timestampSunset(weatherData);
    document.getElementById('weatherdescription').innerHTML = weatherData.weather[0].description;
    document.getElementById('weathericon').innerHTML = '<img src="http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png" alt="Weather Icon">';
  }
}

function springfieldWeather() {
  let requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=4250542&APPID=ef96bb82b8c215e4ec5411a85a1e3c8e&units=imperial';
  let weatherRequest = new XMLHttpRequest();
  weatherRequest.open('GET', requestURL);
  weatherRequest.send();
  weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    function timestampSunrise(weatherData)
    {
      var dt = new Date(weatherData.sys.sunrise * 1000);
      var hr = dt.getHours();
      var m = "0" + dt.getMinutes();
      var s = "0" + dt.getSeconds();
      return hr+ ':' + m.substr(-2) + ' a.m.';
    }

    function timestampSunset(weatherData)
    {
      var dt = new Date(weatherData.sys.sunset * 1000);
      var hr = dt.getHours();
      var m = "0" + dt.getMinutes();
      var s = "0" + dt.getSeconds();
      var pm = hr - 12;
      return pm + ':' + m.substr(-2) + ' p.m.';
    }

    document.getElementById('current-temp').innerHTML = Math.round(weatherData.main.temp);
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(weatherData.wind.speed);
    document.getElementById('cityName').innerHTML = weatherData.name;
    document.getElementById('cityNameMedium').innerHTML = weatherData.name;
    document.getElementById('sunrise').innerHTML = timestampSunrise(weatherData);
    document.getElementById('sunset').innerHTML = timestampSunset(weatherData);
    document.getElementById('weatherdescription').innerHTML = weatherData.weather[0].description;
    document.getElementById('weathericon').innerHTML = '<img src="http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png" alt="Weather Icon">';
  }
}

function greenvilleWeather() {
  let requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=4428475&APPID=ef96bb82b8c215e4ec5411a85a1e3c8e&units=imperial';
  let weatherRequest = new XMLHttpRequest();
  weatherRequest.open('GET', requestURL);
  weatherRequest.send();
  weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    function timestampSunrise(weatherData)
    {
      var dt = new Date(weatherData.sys.sunrise * 1000);
      var hr = dt.getHours();
      var m = "0" + dt.getMinutes();
      var s = "0" + dt.getSeconds();
      return hr+ ':' + m.substr(-2) + ' a.m.';
    }

    function timestampSunset(weatherData)
    {
      var dt = new Date(weatherData.sys.sunset * 1000);
      var hr = dt.getHours();
      var m = "0" + dt.getMinutes();
      var s = "0" + dt.getSeconds();
      var pm = hr - 12;
      return pm + ':' + m.substr(-2) + ' p.m.';
    }

    document.getElementById('current-temp').innerHTML = Math.round(weatherData.main.temp);
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(weatherData.wind.speed);
    document.getElementById('cityName').innerHTML = weatherData.name;
    document.getElementById('cityNameMedium').innerHTML = weatherData.name;
    document.getElementById('sunrise').innerHTML = timestampSunrise(weatherData);
    document.getElementById('sunset').innerHTML = timestampSunset(weatherData);
    document.getElementById('weatherdescription').innerHTML = weatherData.weather[0].description;
    document.getElementById('weathericon').innerHTML = '<img src="http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png" alt="Weather Icon">';
  }
}
