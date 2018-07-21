var section = document.getElementById('data');
var requestURL = 'data/services.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var packages = request.response;
  showServices(packages);
}

function showServices(jsonObj) {
  var service = jsonObj['packages'];

  for (var i = 0; i < service.length; i++) {
    var mySection = document.createElement('section');
    var myH3 = document.createElement('h3');
    var myPara = document.createElement('p');
    var myList = document.createElement('ul');

    myH3.textContent = service[i].name;
    myPara.textContent = 'Price: ' + service[i].cost;

    var offers = service[i].services;
    for (var j = 0; j < offers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = offers[j];
      myList.appendChild(listItem);
    }

    mySection.appendChild(myH3);
    mySection.appendChild(myPara);
    mySection.appendChild(myList);

    section.appendChild(mySection);
  }
}
