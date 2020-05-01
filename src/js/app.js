$(document).ready(function () {
  
  var itemMenu = $('.menu li');
  var scrolldocument = $(document).scrollTop();
  var scrollContainerModal = $('.modal-container').scrollTop();
  var html = $('body').html();

  $('.chat').click(function () {

    $('.msg').toggle();
    $('.close2').toggle();
    $('.modal-chat').slideToggle();
    
    $('.modal-container').scroll(function () {

      var currentScrollContainer = $('.modal-container').scrollTop();

      $('.header').css({
        'top': '-' + currentScrollContainer / 2 + 'px',
        'opacity': 1 - (currentScrollContainer / 120)

      });

      scrollContainerModal = currentScrollContainer;

    });

  });
   

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
