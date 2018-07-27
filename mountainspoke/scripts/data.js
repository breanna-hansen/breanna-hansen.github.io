var section = document.getElementById('services');
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
    var newSection = document.createElement('section');
    var heading = document.createElement('h3');
    heading.textContent = service[i].name;
    var price = document.createElement('p');
    price.textContent = 'Price: ' + service[i].cost;
    var list = document.createElement('ul');

    var offers = service[i].services;
    for (var x = 0; x < offers.length; x++) {
      var labor = document.createElement('li');
      labor.textContent = service[i].services[x];
      list.appendChild(labor);
    }

    newSection.appendChild(heading);
    newSection.appendChild(price);
    newSection.appendChild(list);
    section.appendChild(newSection);
  }
}
