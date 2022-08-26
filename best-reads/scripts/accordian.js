//Lists data
function listInCategory(listID, categoryUrl) {
    let currentLists = 'https://api.nytimes.com/svc/books/v3/lists/current/' + categoryUrl + '?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg';
    console.log(currentLists);
    let lists = new XMLHttpRequest();
    lists.open('GET', currentLists);
    lists.send();
    lists.onload =  function (details) {
        let listData = JSON.parse(lists.responseText);
    
        //Create divs
        var details = document.getElementById("catDetails" + listID);
        var containerDiv = document.createElement('div');
        containerDiv.classList += "booksContainer";
        var secondContainer = "";

        for (var i = 0; i < listData.results.books.length; i++) {
            var number = i + 1;

            //Get book title and change to capitalize
            var bookTitle = listData.results.books[i].title;
            var title = titleCase(bookTitle);
            function titleCase(str) { //Function obtained from the internet and altered
                var splitStr = str.toLowerCase().split(' ');
                for (var i = 0; i < splitStr.length; i++) {
                    // Assign it back to the array
                    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
                }
                // Directly return the joined string
                return splitStr.join(' ');
            }

            //Get isbn
            if (listData.results.books[i].isbns.length > 0) {
                var isbn = listData.results.books[i].isbns[0].isbn10;
            }

            //Get URL
            var bookURL = listData.results.books[i].amazon_product_url + 
                "/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0399590501&linkCode=as2&tag=budgetmealrecipesfb-20&linkId=1cecfc480f866b384c941a1069a078f7";  

            //Content for second div
            var secondContainer = document.createElement('div');
            //Title
            var bookHeader = document.createElement('h2');
            bookHeader.textContent = number + ". " + title;
            secondContainer.appendChild(bookHeader);
            //Author
            var author = document.createElement('p');
            author.textContent = "by: " + listData.results.books[i].author;
            author.classList += "noBottomMg";
            secondContainer.appendChild(author);
            //ISBN
            var showISBN = document.createElement('p');
            showISBN.textContent = "ISBN: " + isbn;
            showISBN.classList += "noTopMg";
            secondContainer.appendChild(showISBN);
            //Image
            var bookImage = document.createElement('img');
            bookImage.src = listData.results.books[i].book_image;
            bookImage.classList += "bookImage";
            secondContainer.appendChild(bookImage);
            //Description
            var bookDescription = document.createElement('p');
            bookDescription.textContent = listData.results.books[i].description;
            secondContainer.appendChild(bookDescription);
            //Content for buttons div
            var buttonsDiv = document.createElement('div');
            buttonsDiv.id = "buttons";
            
            //Add button
            var addButton = document.createElement('button');
            addButton.classList += "button-trio";
            addButton.textContent = "Add";
            let passedTitle = title;
            let passedURL = bookURL;
            addButton.addEventListener("touchstart", poppingClick);
            addButton.addEventListener("touchstart", function () {
                addItem(passedTitle, passedURL);
            });
            //Remove button
            var removeButton = document.createElement('button');
            removeButton.classList += "button-trio";
            removeButton.textContent = "Remove";
            removeButton.addEventListener("touchstart", poppingClick);
            removeButton.addEventListener("touchstart", function () {
                removeItem(passedTitle);
            });
            //Buy button
            var amazonBuy = document.createElement('button');
            amazonBuy.classList += "button-trio";
            amazonBuy.textContent = "Amazon";
            amazonBuy.href = passedURL;
            amazonBuy.addEventListener("touchstart", poppingClick);
            amazonBuy.addEventListener("touchstart", function () {
                window.open(passedURL);
            });
            //Appending
            buttonsDiv.appendChild(addButton);
            buttonsDiv.appendChild(removeButton);
            buttonsDiv.appendChild(amazonBuy);
            secondContainer.appendChild(buttonsDiv);
            containerDiv.appendChild(secondContainer);
        }
        //Append containerDiv and secondContainer
        details.appendChild(containerDiv);
    }
  }

function toggleDetails(listID, categoryUrl) {
    var categoryName = "catDetails" + listID;
    var details = document.getElementById(categoryName);
    if (details.style.display == 'none') {
        details.style.display = 'block';
        listInCategory(listID, categoryUrl);
    } 
    else {
        details.style.display = 'none';
    }
}