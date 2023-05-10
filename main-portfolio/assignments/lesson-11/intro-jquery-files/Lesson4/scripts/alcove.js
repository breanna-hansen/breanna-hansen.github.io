$(function(){

  $('#alcoveLogo').css('opacity', 0.4);
  $('.servicesBtn').css('color', '#FFF');
  $('button').css('border', '1px solid red');

  var toggleStyle = function() {
    var inputFields = $('input[type=text]');
    if (inputFields.css('background-color') === 'rgb(255, 0, 0)') {
      inputFields.css('background-color', 'rgb(255, 255, 255)');
    }
    else {
      inputFields.css('background-color', 'rgb(255, 0, 0)');
    }
  }

  $('#ReqAQuoteBtn').click(toggleStyle);

  $('.coreValues').prepend("<li><strong>This is brand new!!</strong></li>");
  $("<li><strong>This is also great!!</strong></li>").prependTo(".coreValues");

  var nameVal = $('input[name="nameVal"]');

  function fillEmpty() {
    if (nameVal.val() == '') {
        nameVal.val('John Doe');
    }
  }

  $('#ReqAQuoteBtn').click(fillEmpty);

  $('footer').append("<ul><li><a href='animatedMenuBegin.htm'>Animated Menu</a></li>" +
    "<li><a href='DropDownMenuBegin.htm'>Drop Down Menu</a></li>" +
    "<li><a href='fruitBasketBegin.htm'>Fruit Basket</a></li>" +
    "<li><a href='InsertHTMLBegin.htm'>Insert HTML</a></li>" +
    "<li><a href='toggleButtonBegin.htm'>Toggle Button</a></li>" +
    "</ul>");

   $('footer ul').css({
    'display': 'flex',
    'flex-flow': 'row nowrap',
    'justify-content': 'flex-end',
    'align-content': 'center',
    'font-size': '12px',
    'list-style-type': 'none',
     'padding-right': '10px'
  });

  $('footer ul li').css({
    'padding': '8px 10px 0px 10px',
    'font-size': '12px',
  });

})
