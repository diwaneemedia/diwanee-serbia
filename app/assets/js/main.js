function scrollTo(sectionId, speed){
  var offset = 50;
  $('html, body').animate({
      scrollTop: $(sectionId).offset().top + offset
  }, speed);
}
