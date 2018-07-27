var section = document.getElementById('repairs');
var requestURL = 'data/repairs.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var packages = request.response;
  showRepairs(packages);
}


function showRepairs(jsonObj) {
  var repair = jsonObj['packages'];

  for (var i = 0; i < repair.length; i++) {
    var myTable = document.createElement('table');
    var myTR = document.createElement('tr');
    var myTH = document.createElement('th');

    myTH.textContent = repair[i].name;

    var offers = repair[i].services;
    for (var j = 0; j < offers.length; j++) {
      var tdItem = document.createElement('td');
      tdItem.textContent = offers[j].service;
      var price = document.createElement('td');
      price.textContent = offers[j].cost;
      myTR.appendChild(tdItem);
      myTR.appendChild(price);
    }

    myTable.appendChild(myTR);
    myTable.appendChild(myTH);

    section.appendChild(myTable);
  }
}
