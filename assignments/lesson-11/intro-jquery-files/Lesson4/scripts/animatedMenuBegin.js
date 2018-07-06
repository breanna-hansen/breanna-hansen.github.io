$(function() {
  $('.navigation > li').hover(function() {
    // This code executes when the mouse pointer is over the list item
      $(this).addClass('openSesame');
    }, function() {
    //This code executes when the mouse pointer leaves the list item
      $(this).removeClass('openSesame');
  });

})
