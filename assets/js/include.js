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
            if (this.status == 404) { allElements[i].innerHTML = "Include not found: " + file;}
            if (this.status != 200 && this.status != 404) {
              allElements[i].innerHTML = "Unable to load include: " + file;
            }
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
  