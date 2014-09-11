$(document).ready(function(){

  $('.scroll-to-top').hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  $('.scroll-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

});