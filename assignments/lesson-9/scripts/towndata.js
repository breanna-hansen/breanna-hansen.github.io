function GetData(page){
  let requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
  let weatherRequest = new XMLHttpRequest();
  weatherRequest.open('GET', requestURL);
  weatherRequest.send();
  weatherRequest.onload = function () {
      let weatherData = JSON.parse(weatherRequest.responseText);
    switch(page) {
      case 'homePage':
        homePage(weatherData);
        break;
      case 'franklin':
        franklinData(weatherData);
        break;
      case 'springfield':
        springfieldData(weatherData);
        break;
      default:
        greenvilleData(weatherData);
    }
  }
}

function homePage(data) {
    let dataSet = data.towns;
    let allData = buildTable(dataSet);
    document.getElementById('franklinCity').innerHTML = buildTable(data.towns[0]);
    document.getElementById('Springfield').innerHTML = buildTable(data.towns[1]);
    document.getElementById('Greenville').innerHTML = buildTable(data.towns[3]);
    }

function buildTable(tableData){
  allData = "<table>" +
    "<tbody>" +
    "<tr>" +
    "<td colspan='2'><h3>" + tableData.name +
    "</h3></td>" +
    "</tr>" +
    "<tr>" +
    "<td>Motto: </td>" +
    "<td>" + tableData.motto + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Year founded: </td>" +
    "<td>" + tableData.yearFounded + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Population: </td>" +
    "<td>" + tableData.currentPopulation + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Annual rainfall: </td>" +
    "<td>" + tableData.averageRainfall +  "</td>" +
    "</tr>" +
    "</tbody>" +
    "</table>";
  return allData;
}


function franklinData(data) {
  let event = data.towns[0].events;
  let date = "";
  let x;
  for (x in event) {
    date += event[x] + "<br>";
  }
  document.getElementById('events').innerHTML = date;
  document.getElementById('franklinCity').innerHTML = buildTable(data.towns[0]);
}

function springfieldData(data) {

}

function greenvilleData(data) {

}


