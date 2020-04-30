$(document).ready(function () {

  var itemMenu = $('.menu li');
  
  itemMenu.mouseenter(function () { 
  
    $(this).find('.menu-tendina').fadeIn('fast');
    
  });

  itemMenu.mouseleave(function () { 

    $(this).find('.menu-tendina').fadeOut();
    
  });


});