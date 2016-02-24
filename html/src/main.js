
var $ = require('jquery');
var vide = require('./jquery.vide.js');
var Swiper = require('./swiper.min.js');


$(document).ready(function($){

  var mySwiper = new Swiper ('.swiper-logos', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 2,
      loop: true,
      autoplay: 2500,
      loopedSlides: 2
    });

  $('.header').vide('vid/patron'); // Non declarative initialization

  $("#menuBtn").click(function(e) {
    e.preventDefault();
    $(".header__overlay").fadeIn("slow");
  });

  $("#menuClose").click(function(e) {
    e.preventDefault();
    $(".header__overlay").fadeOut("slow");
  });

});

function resetText(value) {
  window.setTimeout(function () {
    $(".overlay__box").fadeOut(400);
    $(".overlay").fadeOut(800);

    if(value == "enquire" || value == "register") {
      $("#" + value).text('Submit');
    } else {
      $("#" + value).text('Get 10% Off');
    }
      $("#" + value).removeClass("btn--success");
  }, 3000);
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
