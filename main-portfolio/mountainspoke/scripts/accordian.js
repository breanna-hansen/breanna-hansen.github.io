$(function () {
  var acc = document.getElementsByClassName("accordian");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var products = this.nextElementSibling;
      if (products.style.display === "block") {
        products.style.display = "none";
      } else {
        products.style.display = "block";
      }
    });
  }
})
