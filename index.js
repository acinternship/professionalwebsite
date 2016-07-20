var $ = require('jquery');

$(document).ready(function () {
  $('header-work').click(function () {
    console.log("Hey!");
    $('content-work').slideToggle('slow');
  });
});