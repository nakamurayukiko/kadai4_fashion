$(document).ready(function(){
  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').fadeToggle(500);
    $('body').toggleClass('noscroll');
  });
  $('.slick01').slick({
    autoplay: true,
    dots: true,
    arrows: false,
  });
  

});
