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
        break;
    }
  }
}

function homePage(data) {
  let dataSet = data.towns;
  let allData = buildTable(dataSet);
  let i;
  for (i = 0; i < data.towns.length; i++) {
    if (data.towns[i]['name'] == "Franklin") {
      document.getElementById('franklinCity').innerHTML = buildTable(data.towns[i]);
    }
    else if (data.towns[i]['name'] == "Springfield") {
      document.getElementById('Springfield').innerHTML = buildTable(data.towns[i]);
    }
    else if (data.towns[i]['name'] == "Greenville") {
      document.getElementById('Greenville').innerHTML = buildTable(data.towns[i]);
    }
    else {
    }
  }
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
  let i;
  for (i = 0; i < data.towns.length; i++) {
    if (data.towns[i]['name'] == "Franklin") {
      let event = data.towns[i].events;
      let date = "";
      let x;
      for (x in event) {
        date += event[x] + "<br>";
      }
      document.getElementById('events').innerHTML = date;
      document.getElementById('franklinCity').innerHTML = buildTable(data.towns[i]);
    }
  }
}

function greenvilleData(data) {
  let i;
  for (i = 0; i < data.towns.length; i++) {
    if (data.towns[i]['name'] == "Greenville") {
      let event = data.towns[i].events;
      let date = "";
      let x;
      for (x in event) {
        date += event[x] + "<br>";
      }
      document.getElementById('events').innerHTML = date;
      document.getElementById('Greenville').innerHTML = buildTable(data.towns[i]);
    }
  }
}

function springfieldData(data) {
  let i;
  for (i = 0; i < data.towns.length; i++) {
    if (data.towns[i]['name'] == "Springfield") {
      let event = data.towns[i].events;
      let date = "";
      let x;
      for (x in event) {
        date += event[x] + "<br>";
      }
      document.getElementById('events').innerHTML = date;
      document.getElementById('Springfield').innerHTML = buildTable(data.towns[i]);
    }
  }
}
