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
    var myTable = document.createElement('table');
    var myThead = document.createElement('thead');
    var myPara = document.createElement('p');
    var myTd = document.createElement('td');

    myThead.textContent = service[i].name;
    myPara.textContent = 'Price: ' + service[i].cost;

    var offers = service[i].services;
    for (var j = 0; j < offers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = offers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH3);
    myArticle.appendChild(myPara);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
