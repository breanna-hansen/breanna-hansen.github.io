//COVID-19 API
let apiURL = 'https://covidtracking.com/api/v1/states/daily.json';
let covid = new XMLHttpRequest(apiURL);
covid.overrideMimeType("application/json");
covid.open('GET', apiURL, true);
covid.send();
covid.onload =  function () {
    let covidData = JSON.parse(covid.responseText);
}