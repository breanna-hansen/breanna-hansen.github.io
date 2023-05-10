//Toggle list view
function showList() {
    var list = document.getElementById("list");
    list.classList.toggle('display-list');
    document.getElementById("bookCategories").style.opacity = "0.2";
  }

  function closeList() {
    var list = document.getElementById("list");
    list.classList.toggle('display-list');
    document.getElementById("bookCategories").style.opacity = "1";
  }

  