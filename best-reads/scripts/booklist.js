//Using class to instantiate object
class Books {
    constructor(title, url, i) {
        this.title = title;
        this.url = url;
        this.i = i;
    } 
  }
  
  //Array for book list
  var yourBooks = [];
  var storageArray = JSON.parse(localStorage.getItem("yourBooks"));
  if (!!storageArray) {
    loadList();
    designButtons();
  }
  else {
    localStorage.setItem("yourBooks", JSON.stringify([]));
  }
  
  //Load list at start of page
  function loadList() {
  //Fill list with items from local storage
  for (i = 0; i < storageArray.length; i++) {
      //create li
      var listItem = document.createElement("LI");
      
      //create remove button
      var removeBox = document.createElement('canvas');
      removeBox.id = "removeBox" + i;
      removeBox.classList += "remove";
      removeBox.addEventListener('touchstart', function(event) {
        var removeTitle = event.target.parentNode.textContent;
        removeItem(removeTitle);
      });
      listItem.appendChild(removeBox);
      
      //create buy button
      var buyBox = document.createElement('canvas');
      buyBox.id = "buyBox" + i;
      let url = storageArray[i].url;
      buyBox.ontouchstart = function() {
        window.location.href = url;
      };
      listItem.appendChild(buyBox); 
  
      //create span
      var spanTitle = document.createElement("span");
      spanTitle.innerHTML = storageArray[i].title;
      spanTitle.classList += 'titleText';
      //append span
      listItem.appendChild(spanTitle);
      //append li to ul
      var addItem = document.getElementById("addedToList");
      addItem.appendChild(listItem);
    }
    //Redesign buttons
    designButtons();
  }
  
  //Add item to list when add button is clicked
  function addItem(bookTitle, bookURL) {
    if (!!storageArray) {
      storageArray = JSON.parse(localStorage.getItem("yourBooks"));
    }
    else {
      storageArray = [];
    }
    //Pull local storage to array
    yourBooks = storageArray;
    //Create new book instance
    var newBook = new Books(bookTitle, bookURL);
    //Push book to array
    yourBooks.push(newBook);
  
    //Reload list
    reloadList(yourBooks);
  }
  
  //Remove item from list when buttons are pressed
  function removeItem(bookTitle) {
    var yourBooks = storageArray;
    for (var i = 0; i < yourBooks.length; i++) {
      if (yourBooks[i].title == bookTitle) {
        yourBooks.splice(i,1);
        break;
      }
    }
    //Reload list
    reloadList(yourBooks);
  }
  
  //Reload list after adding or removing books
  function reloadList(yourBooks) {
    // Save books to local storage
    localStorage.setItem("yourBooks", JSON.stringify(yourBooks));
  
    //Reload list
    if (localStorage.getItem("yourBooks")) {
      document.getElementById("addedToList").innerHTML = "";
      yourBooks = JSON.parse(localStorage.getItem("yourBooks"));
      loadList();
    }
  }
  
  //Canvas Button
  function designButtons() {
    for (var count = 0; count < storageArray.length; count++) {
      //Remove Button
      var newID = "removeBox" + count;
      var c = document.getElementById(newID);
      var ctx = c.getContext("2d");
      ctx.strokeStyle = "#fff";
      ctx.moveTo(60,75);
      ctx.lineTo(230,75);
      ctx.lineWidth = 7;
      ctx.stroke();

      //Buy Button
      var newBuyId = "buyBox" + count;
      var b = document.getElementById(newBuyId);
      var buy = b.getContext("2d");
      buy.strokeStyle = "#fff";
      buy.moveTo(145,140);
      buy.lineTo(155,20);
      buy.lineWidth = 9;
      buy.stroke();
      buy.font = "500 120px Arial";
      buy.textAlign = "center";
      buy.fillStyle = "#fff";
      buy.fillText("$", 150, 120);
    }
  }