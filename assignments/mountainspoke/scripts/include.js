window.onload = function include() {
  let file, xhttp;

  let allElements = document.getElementsByTagName('*');
  for (let i = 0; i < allElements.length; i++) {
    file = allElements[i].getAttribute("includefile");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) { allElements[i].innerHTML = this.responseText;}
          if (this.status == 400) { allElements[i].innerHTML = "Page not found!";}
          allElements[i].removeAttribute('includefile');
          include();
        }

      }
      xhttp.open('GET', 'includes/' + file, true);
      xhttp.send();
      return;
    }
  }
}
