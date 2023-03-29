
// let file = "https://duome.eu/notes/en/es"
// getText("https://duome.eu/notes/en/es");


async function getText(file) {
//     console.log(file);
//   file = await fetch(file);
//   let y = await x.text();
//   document.getElementById("demo").innerHTML = y;

fetch('https://duome.eu/notes/en/es', {
    method : "GET",
    mode: 'cors',
    header: Access-Control-Allow-Origin,
})
  .then((response) => response.json())
  .then((data) => console.log(data)); 

// const url = "https://www.duolingo.com/learn";
// var headers = {}



// // fetch('https://duome.eu/notes/en/es').then(function (response) {
// // 	// The API call was successful!
// // 	return response.text();
// // }).then(function (html) {
// // 	// This is the HTML from our response as a text string
// // 	console.log(html);
// // }).catch(function (err) {
// // 	// There was an error
// // 	console.warn('Something went wrong.', err);
// // });
}



function GetData(){
    let requestURL = 'https://duome.eu/notes/en/es';
    let weatherRequest = new XMLHttpRequest();
    weatherRequest.open('GET', requestURL);
    weatherRequest.send();
    weatherRequest.onload = function () {
      let weatherData = JSON.parse(weatherRequest.responseText);
      console.log(weatherData);
      console.log("hello");
    }
  }
  