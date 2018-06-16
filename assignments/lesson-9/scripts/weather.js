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
      case 'springField':
        springfieldData(weatherData);
        break;
      default:
        greenvilleData(weatherData);
    }
  }
}

function homePage(data) {
  /*document.getElementById('cityName').innerHTML = data.towns[0].name; */
    let dataSet = data.towns;
    let allData = buildTable(dataSet);
      document.getElementById('Franklin').innerHTML = buildTable(data.towns[0]);
      document.getElementById('Springfield').innerHTML = buildTable(data.towns[1]);
      document.getElementById('Greenville').innerHTML = buildTable(data.towns[3]);
    }

  //document.getElementById('stats').innerHTML = allData;
   /* "<table>" +
    "<tbody>" +
    "<tr>" +
    "<td>Motto: </td>" +
    "<td>" + data.towns[0].motto + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Year founded: </td>" +
    "<td>" + data.towns[0].yearFounded + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Population: </td>" +
    "<td>" + data.towns[0].currentPopulation + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Annual rainfall: </td>" +
    "<td>" + data.towns[0].averageRainfall +  "</td>" +
    "</tr>" +
    "</tbody>" +
    "</table>"; */




   /* "Motto: " + data.towns[0].motto + "<br>" + "Year Founded: " + data.towns[0].yearFounded + "<br>" + "Population: " + data.towns[0].currentPopulation + "<br>" + "Average rainfall: " + data.towns[0].averageRainfall; */
/*  document.getElementById('motto').innerHTML = data.towns[0].motto;
  document.getElementById('year').innerHTML = data.towns[0].yearFounded;
  document.getElementById('population').innerHTML = data.towns[0].currentPopulation;
  document.getElementById('rainfall').innerHTML = data.towns[0].averageRainfall;*/

function buildTable(tableData){
  allData = "<table>" +
    "<tbody>" +
    "<tr colspan='2'>" +
    "<td><h3>" + tableData.name +
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
  //document.getElementById('motto').innerHTML = data.towns[0].motto;
}

function springfieldData(data) {

}

function greenvilleData(data) {

}

/*
  functions setFranklin(){
    let data = getData();
  }
  function setIndex(){

  }
document.getElementById('towns').innerHTML = weatherData.towns[0]['name'];
let motto = weatherData.towns[0]['motto'];

  let event = weatherData.towns[0]['events'];
  let date = "";
  var x;
  for (x in event) {
    date += event[x] + "<br>";
  }

  document.getElementById('events').innerHTML = date;
  document.getElementById('motto').innerHTML = motto; */

  /*
  let motto = weatherData.towns[0][motto];
  document.getElementById9('motto').innerHTML = motto;
  */

/*
{"towns" : [ {"name": "Franklin", "motto": "Where you will grow!", "yearFounded": 1788, "currentPopulation": 30458, "averageRainfall": 21,"events" : [
        "March 4: March to the Drum of Donuts", "September 5 - 11: Founder Days", "December 1 - 26: Christmas in the Heart"] },
{"name": "Greenville", "motto": "Green is our way of life.", "yearFounded": 1805, "currentPopulation": 33458, "averageRainfall": 25, "events" : [
        "February 10-12: Greenbration", "May 8 - 18: Greenville Founder Days", "June 20: Verde and Valiant Day", "November 15-16: Greensome Gathering"] },
{"name": "Placerton", "motto": "Positive Placement in Placerton.", "yearFounded": 1946, "currentPopulation": 512, "averageRainfall": 39, "events" : [
        "July 4: A Blaze of Glory", "October 20: Fall through Fall"] },
{ "name": "Springfield", "motto": "Where everyone is lifted.", "yearFounded": 1826, "currentPopulation": 17852, "averageRainfall": 17, "events" : [
        "January 8: Spring into Winter", "April 10-20: Celebration of Life", "July 31-Aug 15: Dog Days of Summer Festival"] }
          ] }
          */

