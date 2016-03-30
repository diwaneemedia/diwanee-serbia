// Scroll to section
function scrollTo(sectionId, speed){
  var offset = 50;
  $('html, body').animate({
      scrollTop: $(sectionId).offset().top + offset
  }, speed);
}
// On scroll header__container background opacity
var scroll;
$(function(){
  $(window).scroll(function(){
    scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll>400){
      $(".header__container").css({"background":"rgba(255,255,255,1)"},400);
    } else {
      var opacity = scroll/300;
      $(".header__container").css({"background":'rgba(255,255,255,'+opacity+')'},400);
    }
  });
});
// Nav menu functionality
$(function(){
  $(".menu-ico").click(function(){
    $(".nav").toggleClass("active");
  });
});
