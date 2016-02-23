
var $ = require('jquery');
var vide = require('./jquery.vide.js');

$(document).ready(function($){

  $('.header').vide('vid/patron'); // Non declarative initialization

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
