//NYT Best Seller Books

//Home page categories
let bestBooks = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
let books = new XMLHttpRequest();
books.open('GET', bestBooks);
books.send();
books.onload =  function () {
    let booksInfo = JSON.parse(books.responseText);
    var sortedCategories = booksInfo.results.sort((a, b) => (a.list_name > b.list_name) ? 1 : -1);
    for (var i = 0; i < sortedCategories.length; i++) {
      //Create new category div
      var bookCategories = document.getElementById('bookCategories');
      var containerDiv = document.createElement('div');
      containerDiv.className = "categoryContent";
      bookCategories.append(containerDiv);

      //Add second div
      var catDetails = document.createElement('div');
      catDetails.classList += "listDetails";
      var categoryName = "catDetails" + i;
      catDetails.id = categoryName;
      catDetails.style.display = "none";
      var categoryUrl = sortedCategories[i].list_name_encoded;
      bookCategories.appendChild(catDetails);

      //Add sub div to containerDiv, assign class, and append to containerDiv
      var innerDiv = document.createElement('div');
      innerDiv.className = "buttonAndCategoryName";

      //Create button
      var categoryButton = document.createElement('button');
      categoryButton.classList += "categoryItem";
      var categoryID = "categoryButton" + i;
      categoryButton.id = categoryID;
      let j = i;
      let catURL = categoryUrl;
      categoryButton.addEventListener("click", poppingClick);
      categoryButton.addEventListener("click", function () { 
        toggleDetails(j, catURL);
      });
      innerDiv.appendChild(categoryButton);

      //Create arrow for button
      var arrowButton = document.createElement('span');
      arrowButton.classList += "down-arrow";
      categoryButton.appendChild(arrowButton);

      //Add category name
      var categoryName = document.createElement('span');
      categoryName.textContent = sortedCategories[i].list_name;
      innerDiv.appendChild(categoryName);
      containerDiv.appendChild(innerDiv);
    }
}