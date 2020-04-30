$(document).ready(function () {
  

  var itemMenu = $('.menu li');
 
  var scrolldocument = $(document).scrollTop();
  console.log(scrolldocument);


  itemMenu.mouseenter(function () { 
  
    $(this).find('.menu-tendina').fadeIn('fast');
    
  });

  itemMenu.mouseleave(function () { 

    $(this).find('.menu-tendina').fadeOut();
    
  });

  $('.hamburger').click(function () { 

    $('.hamburger-bars').toggle();
    $('.close').toggle();
    $('.hamburger-menu').toggleClass('active');

  });

  $(document).scroll(function () { 
    var currentScroll = $(document).scrollTop();

    if (scrolldocument > currentScroll) {

      $('header').css('top', 0);

    } else {
      
      $('header').css('top', '-100px');
    }

    scrolldocument = currentScroll;

    if (!scrolldocument == 0) {
      $('header nav .menu li.sign-up ').css({
        'background-color': '#2F478F'
      });
      $('header nav .menu li.sign-up a ').css({
        'color': '#fff'
      });

    } else {
      $('header nav .menu li.sign-up ').css({
        'background-color': '#fff'
      });
      $('header nav .menu li.sign-up a ').css({
        'color': '#2F478F'
      });
    }
    
  });

  $('header nav .menu li.sign-up').mouseenter(function () { 
    $(this).css({
      'background-color': '#2F478F'
    });
    
    $(this).find('a').css({
      'color': '#fff'
    });

  });

  $('header nav .menu li.sign-up').mouseleave(function () {
    $(this).css({
      'background-color': '#fff'
    });

    $(this).find('a').css({
      'color': '#2F478F'
    });

  });
});
