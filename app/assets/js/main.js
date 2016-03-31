// Scroll to section
function scrollTo(sectionId, speed, offset){
  offset = offset || 50;

  $('html, body').animate({
      scrollTop: $(sectionId).offset().top + offset
  }, speed);
}
// View more
var position_on_click = 0;
function viewMore(){
  if (!$(".read-more-button").hasClass("active")){
    position_on_click = $("body").scrollTop();
    $(".read-more-button").addClass("active");
    $(".about__container").removeAttr("style");
    $(".read-more-button").html("SHOW LESS");
  } else {
    $(".read-more-button").removeClass("active");
    var height = $(".about__text--first").height();
    $(".about__container").css({"max-height":height+25+"px"});
    $(".read-more-button").html("READ MORE");
    scrollTo("#about",0, 1);
  }
}
// On scroll header__container background opacity
var scroll;
$(function(){
  $(window).scroll(function(){
    scroll = $(window).scrollTop();
    if (scroll > 120){
      $(".nav").removeClass("active");
      $(".menu-ico").removeClass("active");
    }
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
    $(".menu-ico").toggleClass("active");
  });
// Initial about text max height
  if ($(window).width()<640){
    var height = $(".about__text--first").height() +25;
    $(".about__container").css({"max-height":height+'px'});
  } else {
    $(".about__container").css({"max-height":'auto'});
  }
});
